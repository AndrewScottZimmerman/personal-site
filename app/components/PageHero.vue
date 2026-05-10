<!--
============================================================================================
| File: PageHero.vue                                                                       |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The PageHero component. Centered page title with a curved divider. Used on  |
| all interior pages.                                                                      |
============================================================================================
-->
<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section class="max-w-prose mx-auto px-6 pt-20 pb-8 text-center">
    <h1 class="font-serif text-h2 text-accent-navy mb-6">
      {{ title }}
    </h1>
    <CurvedDivider />
  </section>
</template>