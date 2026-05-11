<!--
============================================================================================
| File: privacy.vue                                                                        |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The Terms page. Describes the rules of engagement for using the site.       |
============================================================================================
-->
<script setup>
useHead({
  title: 'Terms of Use — Andrew Scott Zimmerman',
  meta: [
    { name: 'description', content: 'Terms of use for andrewscottzimmerman.com.' },
    { name: 'robots', content: 'noindex, no follow'}
  ]
})

// Used to showcase when the policy was last updated. Important constant.
const lastUpdated = 'May 2026'
</script>

<template>
  <div>
    <PageHero title="Terms of Use" />

    <article class="max-w-prose mx-auto px-6 pb-20">
      <p class="font-serif text-small text-ink-secondary italic text-center mb-12">
        Last updated: {{ lastUpdated }}
      </p>

      <p class="font-serif text-body text-ink-primary leading-relaxed mb-10">
        Welcome to <strong>andrewscottzimmerman.com</strong>. This page sets
        out the terms on which you may use the site. By accessing or using
        this site, you agree to these terms. If you don't agree, please
        don't use the site.
      </p>

      <LegalSection title="Purpose of This Site">
        <p>
          This is a personal portfolio website maintained by Andrew Scott
          Zimmerman. It exists to share information about my background,
          experience, and personal software projects with prospective
          employers, collaborators, and others who may be interested.
        </p>
      </LegalSection>

      <LegalSection title="Not Investment Advice">
        <p>
          Nothing on this site constitutes investment advice, a
          recommendation, a solicitation, or an offer to buy or sell any
          security or financial product. Projects and writing featured here
          are for educational and demonstrative purposes only.
        </p>
        <p>
          The views and opinions expressed on this site are my own and do
          not reflect those of my employer. If you are looking for
          investment guidance, please speak with a licensed financial
          professional appropriate to your situation. If you are a Fidelity
          client, please direct inquiries through your Advisor or other
          official Fidelity channels.
        </p>
      </LegalSection>

      <LegalSection title="Accuracy of Information">
        <p>
          I try to keep the content on this site accurate and current, but I
          make no representations or warranties about its completeness,
          reliability, or suitability for any purpose. Information here may
          become out of date without notice.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual Property">
        <p>
          The content on this site — including written text, photographs,
          logos, design elements, and the underlying source code — is
          either owned by me or used with permission. You're welcome to
          link to this site or share excerpts with attribution.
        </p>
        <p>
          You may not reproduce, republish, or substantially copy the
          content of this site without permission. Source code published in
          linked GitHub repositories is governed by the license attached to
          each repository.
        </p>
      </LegalSection>

      <LegalSection title="Third-Party Links">
        <p>
          This site may link to third-party websites such as LinkedIn,
          GitHub, or external project demos. I'm not responsible for the
          content, policies, or practices of those sites. Following a link
          off this site is at your own discretion.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <p>
          This site is provided on an "as is" basis. I make no warranties,
          express or implied, regarding its operation, availability, or
          fitness for any particular purpose. To the maximum extent
          permitted by applicable law, I am not liable for any damages
          arising from your use of, or inability to use, this site.
        </p>
      </LegalSection>

      <LegalSection title="Changes to These Terms">
        <p>
          These terms may be updated from time to time. The "Last updated"
          date at the top of this page will reflect any changes. Continued
          use of the site after changes constitutes acceptance of the
          revised terms.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          For questions about these terms, use the contact form on the
          <NuxtLink to="/connect" class="prose-link">Connect</NuxtLink>
          page.
        </p>
      </LegalSection>

      <!-- Sign-off -->
      <div class="flex justify-center mt-16">
        <SignatureMark :width="180" />
      </div>
    </article>
  </div>
</template>

<style scoped>
.prose-link {
  color: theme('colors.accent.navy');
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  transition: text-decoration-thickness 200ms ease-out;
}

.prose-link:hover {
  text-decoration-thickness: 2px;
}
</style>