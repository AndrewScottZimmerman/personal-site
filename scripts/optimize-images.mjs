/**
 * ============================================================================================
 * File: optimize-images.js                                                                   *
 * Author: Andrew Zimmerman                                                                   *
 * Copyright: Copyright © Andrew Zimmerman 2026                                               *
 * Description: Resizes and recompresses all images in public/images/ to optimize site        *
 * performance. Originals saved to public/images/originals/                                   *
 * Notes: To run, use node scripts/optimize-images.mjs                                        *
 * ============================================================================================
 */
import sharp from 'sharp'
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.join(__dirname, '..', 'public', 'images')
const originalsDir = path.join(imagesDir, 'originals')

// Target of 82 quality to balance savings with quality.
const targets = [
  { pattern: /^hero\./,           width: 1920 },
  { pattern: /^card-/,            width: 1200 },
  { pattern: /^about-portrait\./, width: 1000 },
  { pattern: /^about-dirtbike\./, width: 1200 },
  { pattern: /^signature\./,      width: 720  }
]

const findTarget = (filename) => targets.find((t) => t.pattern.test(filename))
const formatKB = (bytes) => Math.round(bytes / 1024)

const optimize = async () => {
  await fs.mkdir(originalsDir, { recursive: true })
  const files = await fs.readdir(imagesDir)

  let totalBefore = 0
  let totalAfter = 0

  for (const file of files) {
    const target = findTarget(file)
    if (!target) continue

    const inputPath = path.join(imagesDir, file)
    const stat = await fs.stat(inputPath)
    if (!stat.isFile()) continue

    const backupPath = path.join(originalsDir, file)
    const ext = path.extname(file).toLowerCase()
    const base = path.basename(file, ext)
    const webpPath = path.join(imagesDir, `${base}.webp`)
    const isPng = ext === '.png'

    // Keep originals on first run. Afterwards, reoptimize from the saved
    // original so quality doesn't degrade with each run.
    try {
      await fs.access(backupPath)
    } catch {
      await fs.copyFile(inputPath, backupPath)
    }

    // Output WebP
    const webpBuffer = await sharp(backupPath)
      .resize({ width: target.width, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toBuffer()

    await fs.writeFile(webpPath, webpBuffer)

    // Output resized fallback (PNG preserves transparency, JPEG for photos)
    const fallbackBuffer = await sharp(backupPath)
      .resize({ width: target.width, withoutEnlargement: true })
      [isPng ? 'png' : 'jpeg'](isPng ? { compressionLevel: 9 } : { quality: 82, mozjpeg: true })
      .toBuffer()

    await fs.writeFile(inputPath, fallbackBuffer)

    const beforeKB = formatKB(stat.size)
    const afterWebpKB = formatKB(webpBuffer.length)
    const afterFallbackKB = formatKB(fallbackBuffer.length)
    const pct = Math.round((1 - webpBuffer.length / stat.size) * 100)

    console.log(`${file.padEnd(28)} → webp: ${String(afterWebpKB).padStart(4)} KB  ${ext.slice(1)}: ${String(afterFallbackKB).padStart(4)} KB  (was ${beforeKB} KB, ${pct}% smaller)`)

    totalBefore += stat.size
    totalAfter += webpBuffer.length
  }

  const totalPct = Math.round((1 - totalAfter / totalBefore) * 100)
  console.log('─'.repeat(70))
  console.log(`Total: ${formatKB(totalBefore)} KB → ${formatKB(totalAfter)} KB (${totalPct}% smaller)`)
}

optimize().catch((err) => {
  console.error('Optimization failed:', err)
  process.exit(1)
})