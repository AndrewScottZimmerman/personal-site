<!--
============================================================================================
| File: resume.vue                                                                         |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The Resume page. Pulls content from app/data/resume.js.                     |
============================================================================================
-->
<script setup>
import {
  experience,
  profile,
  education,
  skills,
  credentials,
  downloads
} from '~/data/resume'

useHead({
  title: 'Resume — Andrew Scott Zimmerman',
  meta: [
    {
      name: 'description',
      content: 'Experience, education, and credentials of Andrew Scott Zimmerman.'
    }
  ]
})
</script>

<template>
  <div>
    <PageHero title="Resume" />
        
    <!-- Intro -->
    <section v-fade-in class="max-w-prose mx-auto px-6 pb-8 text-center">
      <p class="font-serif text-body text-ink-primary leading-relaxed">
          Welcome to my resume. Below you will find a full history of all the positions
          I've ever held. If you'd like to have a copy for yourself, feel free to
          download the PDF.
      </p>
    </section>

    <!-- Downloads. Stack on mobile. -->
    <section
      v-fade-in
      class="max-w-prose mx-auto px-6 pb-12 flex flex-col sm:flex-row gap-3 justify-center"
    >
      <a
        v-for="dl in downloads"
        :key="dl.href"
        :href="dl.href"
        download
        class="resume-download"
      >
        {{ dl.label }}
      </a>
    </section>

    <!-- Profile -->
    <section v-fade-in class="max-w-prose mx-auto px-6 pb-12">
      <SectionHeading title="Profile" />
      <p class="font-serif text-body text-ink-primary leading-relaxed">
        {{ profile }}
      </p>
    </section>

    <!-- Experience -->
    <section v-fade-in class="max-w-prose mx-auto px-6 pb-12">
      <SectionHeading title="Experience" />
      <JobEntry
        v-for="job in experience"
        :key="`${job.title}-${job.dates}`"
        :title="job.title"
        :company="job.company"
        :location="job.location"
        :dates="job.dates"
        :bullets="job.bullets"
      />
    </section>

    <!-- Education -->
    <section v-fade-in class="max-w-prose mx-auto px-6 pb-12">
      <SectionHeading title="Education" />
      <div class="flex justify-between items-baseline gap-4 mb-1">
        <h3 class="font-serif text-h3 text-ink-primary">
          {{ education.school }}
        </h3>
        <span class="font-serif text-small text-ink-secondary italic whitespace-nowrap">
          {{ education.status }}
        </span>
      </div>
      <div class="flex justify-between items-baseline gap-4">
        <p class="font-serif text-body text-ink-secondary italic">
          {{ education.degree }}
        </p>
        <span class="font-serif text-small text-ink-secondary italic whitespace-nowrap">
          {{ education.location }}
        </span>
      </div>
    </section>

    <!-- Skills -->
    <section v-fade-in class="max-w-prose mx-auto px-6 pb-12">
      <SectionHeading title="Technical and Additional Skills" />
      <p class="font-serif text-body text-ink-primary leading-relaxed mb-2">
        {{ skills.technical }}
      </p>
      <p class="font-serif text-body text-ink-primary leading-relaxed">
        {{ skills.professional }}
      </p>
    </section>

    <!-- Licenses -->
    <section v-fade-in class="max-w-prose mx-auto px-6 pb-20">
      <SectionHeading title="Licenses and Registrations" />
      <p class="font-serif text-body text-ink-primary leading-relaxed">
        {{ credentials }}
      </p>
    </section>

    <!-- Page-End -->
    <section class="flex justify-center pb-20">
      <SignatureMark :width="180" />
    </section>
  </div>
</template>

<style scoped>
/*
    Adjusted shape and width for downloads.
*/
.resume-download {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: theme('colors.accent.navy');
  color: theme('colors.bg.primary');
  padding: 0.75rem 1.5rem;
  font-family: theme('fontFamily.sans');
  font-size: 0.9375rem;
  font-weight: 500;
  border-radius: 2px;
  text-decoration: none;
  transition: background-color 200ms ease-out, transform 200ms ease-out;
}

.resume-download:hover {
  background-color: #2a3a64; /* manual lighten of accent.navy */
  transform: translateY(-1px);
}

.resume-download:active {
  transform: translateY(0) scale(0.98);
  transition-duration: 100ms;
}
</style>