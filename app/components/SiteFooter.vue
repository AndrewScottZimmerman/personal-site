<!--
============================================================================================
| File: SiteFooter.vue                                                                     |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The SiteFooter component. Contains the legal dislaimer and copyright line.  |
| end of site page and to the navigation. Each context will dictate the size of the image. |
============================================================================================
-->
<script setup>
const currentYear = new Date().getFullYear()

const legalLinks = [
  { to: '/terms',   label: 'Terms' },
  { to: '/privacy', label: 'Privacy' }
]
</script>

<template>
  <footer class="bg-bg-muted mt-24">
    <div class="max-w-prose mx-auto px-6 py-12 text-center">
      <p class="font-sans text-small text-ink-secondary leading-relaxed">
        The views and opinions on this site are my own and do not reflect those
        of my employer. Nothing on this site constitutes financial advice, a
        recommendation, or an offer to buy or sell any security. Projects
        featured here are for educational and demonstrative purposes only.
      </p>

      <!-- Terms and Policy Links. -->
      <nav
        class="flex justify-center gap-6 mt-8"
        aria-label="Legal"
      >
        <NuxtLink
          v-for="link in legalLinks"
          :key="link.to"
          :to="link.to"
          class="footer-link font-sans text-small text-ink-secondary"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <p class="font-sans text-micro text-ink-secondary mt-6">
        Copyright © Andrew Zimmerman {{ currentYear }}
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  position: relative;
  padding-bottom: 2px;
  transition: color 200ms ease-out;
}

.footer-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: theme('colors.ink.secondary');
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 250ms ease-out;
}

.footer-link:hover {
  color: theme('colors.ink.primary');
}

.footer-link:hover::after {
  transform: scaleX(1);
}
</style>