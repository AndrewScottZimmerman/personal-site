<!--
============================================================================================
| File: SignatureMark.vue                                                                  |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The SignatureMark component. Provides the personal signature image to the   |
| end of site page and to the navigation. Each context will dictate the size of the image. |
============================================================================================
-->
<script setup>
defineProps({
  width: {
    type: Number,
    default: 140
  },
  alt: {
    type: String,
    default: 'Andrew Scott Zimmerman'
  }
})
</script>

<template>
  <img
    :src="'/images/signature.png'"
    :alt="alt"
    :width="width"
    class="block h-auto"
    loading="lazy"
    decoding="async"
  />
</template>