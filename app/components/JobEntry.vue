<!--
============================================================================================
| File: JobEntry.vue                                                                       |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The JobEntry component. Displays data for each job entry to resume.vue from |
| data in resume.js.                                                                       |
============================================================================================
-->
<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  dates: {
    type: String,
    required: true
  },
  bullets: {
    type: Array,
    required: true,
    validator: (arr) => arr.every((b) => typeof b === 'string')
  }
})
</script>

<template>
  <article class="mb-12">
    <header>
      <div class="flex justify-between items-baseline gap-4 mb-1">
        <h3 class="font-serif text-h3 text-ink-primary">{{ title }}</h3>
        <span class="font-serif text-small text-ink-secondary italic whitespace-nowrap">
          {{ dates }}
        </span>
      </div>
      <div class="flex justify-between items-baseline gap-4 mb-5">
        <p class="font-serif text-body text-ink-secondary italic">{{ company }}</p>
        <span class="font-serif text-small text-ink-secondary italic whitespace-nowrap">
          {{ location }}
        </span>
      </div>
    </header>

    <ul class="space-y-3">
      <li
        v-for="(bullet, index) in bullets"
        :key="index"
        class="font-serif text-body text-ink-primary leading-relaxed pl-6 relative"
      >
        <span class="absolute left-0 top-0 text-accent-navy" aria-hidden="true">•</span>
        {{ bullet }}
      </li>
    </ul>
  </article>
</template>