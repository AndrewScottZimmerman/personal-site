<!--
============================================================================================
| File: privacy.vue                                                                        |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The Privacy Polciy page. Describes what data is collected by the site, why, |
| and how long it is retained. Rights of the visitors are also disclosed.                  |
============================================================================================
-->
<script setup>
useHead({
  title: 'Privacy Policy — Andrew Scott Zimmerman',
  meta: [
    { name: 'description', content: 'How andrewscottzimmerman.com handles visitor data.' },
    { name: 'robots', content: 'noindex, no follow'}
  ]
})

// Used to showcase when the policy was last updated. Important constant.
const lastUpdated = 'May 2026'
</script>

<template>
  <div>
    <PageHero title="Privacy Policy" />

    <article class="max-w-prose mx-auto px-6 pb-20">
      <p class="font-serif text-small text-ink-secondary italic text-center mb-12">
        Last updated: {{ lastUpdated }}
      </p>

      <p class="font-serif text-body text-ink-primary leading-relaxed mb-10">
        This page describes what information is collected when you visit
        <strong>andrewscottzimmerman.com</strong>, why it's collected, and how
        long it's kept. The site is a personal portfolio. There are no user
        accounts, no purchases, no comments, and no newsletter. The data
        described below is what's logged automatically by the hosting
        infrastructure.
      </p>

      <LegalSection title="Information Collected Automatically">
        <p>
          When you visit this site, the underlying content delivery network
          (Amazon CloudFront) records standard request information for each
          page or asset you load. This includes:
        </p>
        <ul class="list-disc pl-6 space-y-1">
          <li>Your IP address</li>
          <li>The date and time of your request</li>
          <li>The page or file you requested</li>
          <li>The HTTP response code returned</li>
          <li>Your browser and operating system (from the User-Agent string)</li>
          <li>The referring URL, if any (the page that linked you here)</li>
          <li>The approximate geographic region of your IP address</li>
        </ul>
        <p>
          This information is logged at the network layer and is the same
          data any standard web server records. The site itself does not
          place tracking cookies, fingerprint your device, or use third-party
          analytics services such as Google Analytics.
        </p>
      </LegalSection>

      <LegalSection title="Why This Information Is Collected">
        <p>
          Access logs are used for legitimate operational purposes:
          monitoring site performance, understanding which pages and
          projects are being viewed, identifying broken links, and
          investigating any abuse or security incidents.
        </p>
        <p>
          Aggregated traffic data may also inform decisions about which
          projects to feature more prominently. No individual visitor is
          profiled, identified, or targeted.
        </p>
      </LegalSection>

      <LegalSection title="How Long Information Is Kept">
        <p>
          Access logs are retained for up to 90 days, after which they are
          permanently deleted. No long-term archive of individual visit
          data is maintained.
        </p>
      </LegalSection>

      <LegalSection title="Third Parties">
        <p>
          This site is delivered through several infrastructure providers,
          each of which may process request data as part of routing traffic
          to and from your browser:
        </p>
        <ul class="list-disc pl-6 space-y-1">
          <li>
            <strong>Cloudflare</strong> — operates the DNS for the domain.
          </li>
          <li>
            <strong>Amazon Web Services</strong> — hosts the site
            (S3 + CloudFront) and stores access logs.
          </li>
          <li>
            <strong>Google Fonts</strong> — serves the typefaces used on
            the site. Loading a font issues a request to Google's servers,
            which may log your IP address per Google's own policies.
          </li>
        </ul>
        <p>
          No information is shared with marketers, advertisers, or
          analytics platforms.
        </p>
      </LegalSection>

      <LegalSection title="Your Rights">
        <p>
          Depending on where you live, you may have rights under privacy
          laws such as the GDPR (European Union) or the CCPA (California)
          to request access to, correction of, or deletion of data
          relating to you.
        </p>
        <p>
          Because the data collected here is limited to short-term access
          logs identified only by IP address, fulfilling such a request
          requires you to provide the IP address(es) and approximate
          date(s) of your visit. To make a request, please get in touch
          via the contact form on the
          <NuxtLink to="/connect" class="prose-link">Connect</NuxtLink>
          page.
        </p>
      </LegalSection>

      <LegalSection title="Cookies and Local Storage">
        <p>
          This site does not set cookies. It does not use browser local
          storage to track or identify visitors. Some browser-managed
          storage may be created by the underlying web framework for
          purposes such as caching static assets, but this storage is
          functional, not analytical.
        </p>
      </LegalSection>

      <LegalSection title="Children's Privacy">
        <p>
          This site is not directed at children under 13, does not knowingly
          collect information from them, and contains no content intended
          for a young audience.
        </p>
      </LegalSection>

      <LegalSection title="Changes to This Policy">
        <p>
          If meaningful changes are made to how this site collects or uses
          information, the "Last updated" date at the top of this page will
          be revised. Material changes will be reflected here before they
          take effect.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          For questions about this policy or about how your information
          is handled, use the contact form on the
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