<!--
  Global error page. Nuxt renders this for any unhandled error: 404s,
  500s, and anything else that crashes the page lifecycle. The `error`
  prop is provided by Nuxt and contains statusCode, statusMessage, etc.

  Visually consistent with the rest of the site — same fonts, colors,
  signature mark sign-off — so an error feels like a polished moment
  rather than a broken state.
-->
<!--
============================================================================================
| File: error.vue                                                                          |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The Error page. Displays statusCode, statusMessage, etc.                    |
============================================================================================
-->
<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
})

const isNotFound = computed(() => props.error.statusCode === 404)

const title = computed(() => isNotFound.value ? 'Page Not Found' : 'Something Went Wrong')

const message = computed(() => {
  if (isNotFound.value) {
    return "The page you're looking for doesn't exist, or has been moved. Use the link below to head back home."
  }
  return "An unexpected error occurred. The issue has been logged. Try heading back home, and if the problem persists, feel free to reach out."
})

const handleClearError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="bg-bg-primary text-ink-primary font-serif antialiased min-h-screen flex flex-col">
    <SiteHeader />

    <main class="flex-1 flex items-center justify-center px-6 py-20">
      <div class="max-w-prose text-center">
        <div class="font-sans text-small text-ink-secondary mb-4 tracking-wider-caps">
          {{ error.statusCode }}
        </div>

        <h1 class="font-serif text-h2 text-accent-navy mb-6">
          {{ title }}
        </h1>

        <CurvedDivider class="mb-8" />

        <p class="font-serif text-body text-ink-primary leading-relaxed mb-10">
          {{ message }}
        </p>

        <button
          type="button"
          class="home-button"
          @click="handleClearError"
        >
          Return Home
        </button>
      </div>
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
.home-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: theme('colors.accent.navy');
  color: theme('colors.bg.primary');
  padding: 0.875rem 2rem;
  font-family: theme('fontFamily.sans');
  font-size: 1rem;
  font-weight: 500;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 250ms ease-out, transform 250ms ease-out;
}

.home-button:hover {
  background-color: #2a3a64;
  transform: translateY(-1px);
}

.home-button:active {
  transform: translateY(0) scale(0.98);
  transition-duration: 100ms;
}
</style>