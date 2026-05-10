<!--
============================================================================================
| File: connect.vue                                                                        |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The Connect Page. Used to display different ways to connect.                |
============================================================================================
-->
<script setup>
useHead({
  title: 'Connect — Andrew Scott Zimmerman',
  meta: [
    { name: 'description', content: 'Professional contact and links.' }
  ]
})

const emailModalOpen = ref(false)

const externalLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/andyszimmerman' },
  { label: 'GitHub',   href: 'https://github.com/AndrewScottZimmerman' }
]
</script>

<template>
  <div>
    <PageHero title="Connect" />

        <!-- Introduction  -->
    <section v-fade-in class="max-w-prose mx-auto px-6 pb-12 text-center">
      <p class="font-serif text-body text-ink-primary leading-relaxed">
        If you're interested in connecting with me professionally, you can find
        me on LinkedIn. Please note that client inquiries will not be addressed,
        as they should be placed through your Advisor or through other official
        Fidelity channels.
      </p>
    </section>

        <!-- Action Buttons -->
    <section v-fade-in class="max-w-md mx-auto px-6 pb-20">
      <div class="flex flex-col gap-3">
        <LinkButton
          v-for="link in externalLinks"
          :key="link.href"
          :href="link.href"
          external
        >
          <span>{{ link.label }}</span>
          <span aria-hidden="true">→</span>
        </LinkButton>

        <LinkButton @click="emailModalOpen = true">
          <span>Email</span>
          <span aria-hidden="true">→</span>
        </LinkButton>
      </div>
    </section>

        <!-- Page-End -->
    <section class="flex justify-center pb-20">
      <SignatureMark :width="180" />
    </section>

    <ContactModal
      :is-open="emailModalOpen"
      @close="emailModalOpen = false"
    />
    </div>
</template>