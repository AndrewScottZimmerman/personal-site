<!--
============================================================================================
| File: LegalSection.vue                                                                   |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The LegalSection component. Provides a titled section for policy and term   |
| pages.                                                                                   |
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
  <section class="mb-10">
    <h2 class="font-serif text-h3 text-accent-navy mb-4">
      {{ title }}
    </h2>
    <div class="font-serif text-body text-ink-primary leading-relaxed space-y-4">
      <slot />
    </div>
  </section>
</template>