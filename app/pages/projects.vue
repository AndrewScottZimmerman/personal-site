<!--
============================================================================================
| File: projects.vue                                                                       |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The Projects page. Showcases projects as a portfolio in a 2-column grid of  |
| Project data lives in app/data/projects.js.                                              |
============================================================================================
-->
<script setup>
import { projects } from '~/data/projects'

useHead({
  title: 'Projects — Andrew Scott Zimmerman',
  meta: [
    {
      name: 'description',
      content: "Software I've built to explore problems in finance and markets."
    }
  ]
})
</script>

<template>
  <div>
    <PageHero title="Projects" />

    <!-- Intro -->
    <section v-fade-in class="max-w-prose mx-auto px-6 pb-12 text-center">
      <p class="font-serif text-body text-ink-primary leading-relaxed">
        Discover demonstrations of principles used for gathering financial information
        and standard practices in the industry. These projects also showcase use cases
        for Vue and AWS pipelines. Please note that any market data is chosen for
        demonstration purposes and not as an endorsement or advice. All data is
        selected for educational and demonstrative purposes only.
      </p>
    </section>

    <!-- Project Grid -->
    <section v-fade-in class="max-w-grid mx-auto px-6 pb-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :tech-stack="project.techStack"
          :project-url="project.projectUrl"
          :github-url="project.githubUrl"
          :image="project.image"
        />
      </div>
    </section>

    <!-- Page-End -->
    <section class="flex justify-center pb-20">
      <SignatureMark :width="180" />
    </section>
  </div>
</template>