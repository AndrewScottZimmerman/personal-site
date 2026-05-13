<!--
============================================================================================
| File: index.vue                                                                          |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The Homepage. Three sections: Photographic hero with the name and tagline,  |
| centered elaboration paragrpah, 2x2 grid of Homecards that link to four interior pages.  |
============================================================================================
-->
<script setup>
import { homeCards } from '~/data/home'

useHead({
  title: 'Andrew Scott Zimmerman'
})

// Inline overlay for the hero. Tailwind wasn't used to ensure a more consistent experience across browsers.
const heroOverlayStyle = {
  background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.20) 40%, rgba(0,0,0,0.30) 100%)'
}
</script>

<template>
  <div>
        <!-- Hero -->
    <section class="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      <picture>
        <source srcset="/images/hero.webp" type="image/webp" />
        <img
          src="/images/hero.jpg"
          fetchpriority="high"
          alt=""
          width="1920"
          height="1080"
          class="absolute inset-0 w-full h-full object-cover"
        />
      </picture>
      <div class="absolute inset-0" :style="heroOverlayStyle" aria-hidden="true" />

      <div class="relative text-center px-6 max-w-prose">
        <h1 class="font-serif text-h1 text-white mb-4">
          Andrew Scott Zimmerman
        </h1>
        <p class="font-serif text-body text-white/95 italic">
          A financial services professional, working at the intersection of
          investments, analysis, and software.
        </p>
      </div>
    </section>

        <!-- Elaboration -->
    <section v-fade-in class="max-w-prose mx-auto px-6 pt-20 pb-12 text-center">
      <p class="font-serif text-body text-ink-primary leading-relaxed">
        A Registered Representative at Fidelity Investments, with a background
        in software and a focus on investments and analysis. I'm interested in
        roles where domain knowledge and technical skill compound, such as
        Investment Management Consulting, analysis, and adjacent paths.
      </p>
    </section>

    <div v-fade-in class="flex justify-center pb-12">
      <CurvedDivider />
    </div>

        <!-- Card Grid -->
    <section v-fade-in class="max-w-grid mx-auto px-6 pb-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <HomeCard
          v-for="card in homeCards"
          :key="card.to"
          :to="card.to"
          :title="card.title"
          :description="card.description"
          :image="card.image"
        />
      </div>
    </section>

        <!-- Page-End -->
    <section class="flex justify-center pb-20">
      <SignatureMark :width="180" />
    </section>
    </div>
</template>