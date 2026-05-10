<!--
============================================================================================
| File: SiteHeader.vue                                                                     |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The SiteHeader component. A sticky on scroll, translucent, nav. Adjusting   |
| menu for mobile. Aria-expanded to communicate state. Aria-labels used for screen readers.|
============================================================================================
-->
<script setup>
import { navLinks } from '~/data/navigation'

const route = useRoute()
const mobileMenuOpen = ref(false)

// Close the mobile menu on routing.
watch(() => route.fullPath, () => {
  mobileMenuOpen.value = false
})

// Close menu on escape key.
const onKeydown = (event) => {
  if (event.key === 'Escape') mobileMenuOpen.value = false
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <header class="sticky top-0 z-50 bg-bg-muted/90 backdrop-blur-sm">
    <div class="max-w-grid mx-auto px-6 py-4 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center" aria-label="Home">
        <SignatureMark :width="120" />
      </NuxtLink>

        <!-- Desktop Nav -->
      <nav
        class="hidden md:flex items-center gap-8"
        aria-label="Primary"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link font-sans text-small text-ink-primary"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

            <!-- Mobile Menu Toggle -->
      <button
        type="button"
        class="md:hidden p-2 -m-2"
        :aria-expanded="mobileMenuOpen"
        aria-controls="mobile-nav"
        :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          class="hamburger-icon"
          :class="{ 'is-open': mobileMenuOpen }"
          aria-hidden="true"
        >
          <path d="M3 6h18"  class="hamburger-line top" />
          <path d="M3 12h18" class="hamburger-line middle" />
          <path d="M3 18h18" class="hamburger-line bottom" />
        </svg>
      </button>
    </div>

        <!-- Mobile Menu Overlay. Slide-and-Fade animation. -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-show="mobileMenuOpen"
        id="mobile-nav"
        class="md:hidden bg-bg-muted border-t border-ink-secondary/10"
        aria-label="Primary mobile"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="block px-6 py-4 font-sans text-body text-ink-primary hover:bg-bg-primary transition-colors"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
/* Animaed underline for menu links. Sweeps in from left on hover or when
it's the active route. ::after pseudo-element used to ensure layout space
isn't altered when invis.  */
.nav-link {
  position: relative;
  padding-bottom: 4px;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: theme('colors.accent.navy');
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 300ms ease-out;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  transform: scaleX(1);
}

/*
Hamburger icon changed when opened.
*/
.hamburger-line {
  transition: transform 300ms ease-out, opacity 200ms ease-out;
  transform-origin: center;
}

.hamburger-icon.is-open .top {
  transform: translateY(6px) rotate(45deg);
}

.hamburger-icon.is-open .middle {
  opacity: 0;
}

.hamburger-icon.is-open .bottom {
  transform: translateY(-6px) rotate(-45deg);
}
</style>
