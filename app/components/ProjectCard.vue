<!--
============================================================================================
| File: ProjectCard.vue                                                                    |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The ProjectCard component. Used to display projects created or in currently |
| in development related to finance and software.                                          |
============================================================================================
-->
<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  techStack: {
    type: Array,
    required: true,
    validator: (arr) => arr.every((t) => typeof t === 'string')
  },
  projectUrl: {
    type: String,
    default: null
  },
  githubUrl: {
    type: String,
    default: null
  },
  image: {
    type: String,
    default: null
  }
})
</script>

<template>
  <article class="bg-bg-muted rounded-sm overflow-hidden flex flex-col">
<div class="aspect-[16/10] bg-bg-muted/60 overflow-hidden">
      <img
        v-if="image"
        :src="image"
        :alt="`${title} screenshot`"
        class="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center"
      >
        <span class="font-mono text-micro text-ink-secondary uppercase tracking-wider-caps">
          Coming soon
        </span>
      </div>
    </div>

    <div class="p-8 flex flex-col flex-1">
      <h3 class="font-serif text-h3 text-ink-primary mb-3">{{ title }}</h3>
      <p class="font-serif text-body text-ink-primary leading-relaxed mb-6 flex-1">
        {{ description }}
      </p>

      <div class="mb-6">
        <div class="font-mono text-micro text-ink-secondary uppercase tracking-wider-caps">
          {{ techStack.join('  ·  ') }}
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <a
          v-if="projectUrl"
          :href="projectUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="action-button"
        >
          <span>View Project</span>
          <span aria-hidden="true">→</span>
        </a>
        <a
          v-if="githubUrl"
          :href="githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="action-button"
        >
          <span>GitHub</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.action-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: theme('colors.accent.navy');
  color: theme('colors.bg.primary');
  padding: 0.75rem 1.25rem;
  font-family: theme('fontFamily.sans');
  font-size: 0.9375rem;
  font-weight: 500;
  border-radius: 2px;
  transition: background-color 200ms ease-out, transform 200ms ease-out;
}

.action-button:hover {
  background-color: #2a3a64; /* manual lighten of accent.navy */
  transform: translateX(2px);
}

.action-button:active {
  transform: translateX(2px) scale(0.98);
  transition-duration: 100ms;
}
</style>