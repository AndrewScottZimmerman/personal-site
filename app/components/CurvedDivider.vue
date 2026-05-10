
<!--
============================================================================================
| File: CurvedDivider.vue                                                                  |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The CurvedDivider component. A divider rendered using an SVG path. Used     |
| between major sections. Curved was used to make the site feel ornamental and less rigid. |
============================================================================================
-->
<script setup>
defineProps({
  width: {
    type: Number,
    default: 140
  },
  height: {
    type: Number,
    default: 24
  },
  color: {
    type: String,
    default: '#1B2A4E'
  },
  strokeWidth: {
    type: Number,
    default: 1
  },
  opacity: {
    type: Number,
    default: 0.5
  }
})
</script>

<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    :style="{ opacity }"
    xmlns="http://www.w3.org/2000/svg"
    class="block mx-auto"
    aria-hidden="true"
    focusable="false"
  >
    <!--
        Path: rises gently from left, dips at the midpoint, sweeps up
        and to the right. Quadratic Beqier followed by smooth continuation.
    -->
    <path
      d="M 0 14 Q 35 4, 70 12 T 140 10"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      fill="none"
    />
  </svg>
</template>
