<!--
============================================================================================
| File: HomeCard.vue                                                                       |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The HomeCard component. A navigation card used on index.vue in a 2x2 grid.  |
| Each grid has a gradient overlay and animates on hover. The gradient overlay is done as  |
| an inline style instead of Tailwind to ensure consistency across browsers.               |
============================================================================================
-->
<script setup>
defineProps({
  to: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

// Inline styling for the overlay.
const overlayStyle = {
  background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.25) 100%)'
}
</script>

<template>
  <NuxtLink
    :to="to"
    class="group relative block aspect-[4/3] overflow-hidden rounded-sm"
  >
        <!-- Background image. No alt due to the text already conveying meaning.  -->
        <picture>
          <source :srcset="image.replace(/\.(jpg|jpeg|png)$/i, '.webp')" type="image/webp" />
          <img
            :src="image"
            alt=""
            class="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <!-- Gradient overlay to improve legibility. -->
        <div
            class="absolute inset-0 transition-opacity duration-500 group-hover:opacity-80"
            :style="overlayStyle"
            aria-hidden="true"
        />

        <!-- Card Content -->
        <div class="relative h-full flex flex-col items-center justify-center text-center px-6 py-8">
            <h2 class="font-serif text-h3 text-white mb-2">{{ title }}</h2>
            <p class="font-serif text-body text-white/90 max-w-xs">{{ description }}</p>
        </div>
    </NuxtLink>
</template>