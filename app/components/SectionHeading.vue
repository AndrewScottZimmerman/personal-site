<!--
============================================================================================
| File: SectionHeading.vue                                                                 |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The SectionHeading component. H2 section heading that pairs the heading with|
| an underline.                                                                            |
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
  <div class="mb-8 mt-4">
    <h2 class="font-serif text-h2 text-accent-navy mb-3">
      {{ title }}
    </h2>
    <div class="h-px bg-accent-navy/40 w-full" aria-hidden="true" />
  </div>
</template>
