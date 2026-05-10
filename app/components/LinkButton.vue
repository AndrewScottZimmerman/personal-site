<!--
============================================================================================
| File: LinkButton.vue                                                                     |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The LinkButton component. Navy action button used across the site.          |
============================================================================================
-->
<script setup>
const props = defineProps({
  href: {
    type: String,
    default: null
  },
  external: {
    type: Boolean,
    default: false
  },
  download: {
    type: Boolean,
    default: false
  }
})

const isLink = computed(() => Boolean(props.href))
</script>

<template>
  <a
    v-if="isLink"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :download="download || undefined"
    class="link-button"
  >
    <slot />
  </a>
  <button v-else type="button" class="link-button">
    <slot />
  </button>
</template>

<style scoped>
.link-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  background-color: theme('colors.accent.navy');
  color: theme('colors.bg.primary');
  padding: 1rem 1.5rem;
  font-family: theme('fontFamily.sans');
  font-size: 1rem;
  font-weight: 500;
  border-radius: 2px;
  cursor: pointer;
  text-decoration: none;
  transition:
    background-color 250ms ease-out,
    transform 250ms ease-out,
    box-shadow 250ms ease-out;
}

.link-button:hover {
  background-color: #2a3a64; /* manual lighten of accent.navy */
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(27, 42, 78, 0.15);
}

.link-button:active {
  transform: translateX(4px) scale(0.98);
  transition-duration: 100ms;
}
</style>