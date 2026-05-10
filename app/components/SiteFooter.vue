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
      <p class="font-sans text-micro text-ink-secondary mt-6">
        Copyright © Andrew Zimmerman {{ currentYear }}
      </p>
    </div>
  </footer>
</template>
