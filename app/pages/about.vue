<!--
============================================================================================
| File: about.vue                                                                          |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The About Page. Desiged to be an editorial five-section narrative covering  |
| background, current role, software work, target roles, and personal life.                |
| Notes: Sections 1 and 5 use a 2-column photo + text layout. Sections 2 - 4 are text only |
| and use the NumberedSection component.                                                   |
============================================================================================
-->
<script setup>
useHead({
  title: 'About — Andrew Scott Zimmerman',
  meta: [
    {
      name: 'description',
      content: "Background, what I do at Fidelity Investments, and what I'm looking for."
    }
  ]
})
</script>

<template>
  <div>
    <PageHero title="About Me" />

        <!-- 01 - How I got into Financial Services. Portrait photo. -->
    <section v-fade-in class="max-w-grid mx-auto px-6 py-12">
      <div class="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
        <div class="aspect-[3/4] overflow-hidden rounded-sm">
          <picture>
            <source srcset="/images/about-portrait.webp" type="image/webp" />
            <img
              src="/images/about-portrait.jpg"
              fetchpriority="high"
              alt="Andrew Scott Zimmerman"
              width="1000"
              height="1333"
              class="w-full h-full object-cover"
              decoding="async"
            />
          </picture>
        </div>
        <div>
          <div class="font-sans text-small text-ink-secondary mb-2 tracking-wider-caps">
            01
          </div>
          <h2 class="font-serif text-h3 text-accent-navy mb-6">
            How I got into Financial Services
          </h2>
          <p class="font-serif text-body text-ink-primary leading-relaxed">
            Like most high-schoolers, I started college expecting to do something else.
            At the time, I was convinced that Computer Science was the career path for me.
            My thinking changed when I realized how deeply economics affects everything:
            how people connect through transactions, how systems behave and adjust in
            unexpected ways. The realization that I could use my understanding to help
            people reach their goals, such as buying a home, paying for their children's
            education, or saving for retirement, pulled me into investments and has kept
            me there.
          </p>
        </div>
      </div>
    </section>

        <!-- 02 - What I do at Fidelity. Text only. -->
    <section v-fade-in class="max-w-prose mx-auto px-6 py-12">
      <NumberedSection number="02" title="What I do at Fidelity Investments">
        <p>
          I work as a Wealth Management Service Specialist at Fidelity Investments,
          holding the Series 7 and Series 63 licenses. In this role, I assist advisors
          and clients with Transfer of Assets requests, account maintenance, and
          monetary transactions, acting as a case manager to ensure each request is
          completed promptly and to a high standard. The role sits between operations
          and service, where I work to bridge the gap and make things easier for
          everyone involved.
        </p>
      </NumberedSection>
    </section>

        <!-- 03 - Why Do I Build Software? Text only. -->
    <section v-fade-in class="max-w-prose mx-auto px-6 py-12">
      <NumberedSection number="03" title="Why Do I Build Software?">
        <p>
          I started developing code in fifth grade and eventually published my first app
          on the App Store at the age of fifteen. Finance came later, with age, and the
          two interests naturally converged as I instinctively wanted to blend them.
          Software skills are now vital in investment work, and building my own tools
          enables me to grow both skills and provides concrete examples to potential
          employers.
        </p>
      </NumberedSection>
    </section>

        <!-- 04 - What Positon Am I Looking For? Text only. -->
    <section v-fade-in class="max-w-prose mx-auto px-6 py-12">
      <NumberedSection number="04" title="What Position Am I Looking For?">
        <p>
          I am primarily looking at roles in Advisement or Analysis, ideally at the
          intersection of both, such as an Investment Management Consultant role. A
          position like this appeals to me because of the combination of understanding
          the technical complexities of investments while also serving as a steady and
          reassuring voice to clients whose wealth depends on it.
        </p>
      </NumberedSection>
    </section>

        <!-- 05 - Getting Personal. Dirt-Bike photo. -->
    <section v-fade-in class="max-w-grid mx-auto px-6 py-12">
      <div class="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
        <div class="aspect-[4/3] overflow-hidden rounded-sm md:order-1 order-2">
          <picture>
            <source srcset="/images/about-dirtbike.webp" type="image/webp" />
            <img
              src="/images/about-dirtbike.jpg"
              alt="Out riding"
              width="1200"
              height="900"
              class="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
        <div class="md:order-2 order-1">
          <div class="font-sans text-small text-ink-secondary mb-2 tracking-wider-caps">
            05
          </div>
          <h2 class="font-serif text-h3 text-accent-navy mb-6">
            Getting Personal
          </h2>
          <p class="font-serif text-body text-ink-primary leading-relaxed">
            When I'm not working, I can be found dirt biking, snow skiing, water skiing,
            playing the occasional video game, or running my D&amp;D campaign with my friends.
            When I'm on vacation, you can almost certainly find me hiding behind a camera
            as I capture landscapes to enjoy. If you're interested in my favorite latest
            read, it's <em>Atomic Habits</em> by James Clear.
          </p>
        </div>
      </div>
    </section>

        <!-- Page-End -->
    <section class="flex justify-center py-20">
      <SignatureMark :width="180" />
    </section>
    </div>
</template>