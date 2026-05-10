// ============================================================================================
// | File: nuxt.config.ts
// | Author: Andrew Scott Zimmerman
// | Copyright: Copyright © Andrew Zimmerman 2026
// | Description: The Tailwind Nuxt Config file.
// | Notes: This site is statically generated and deployed as a pure static bundle to S3 +
// | Cloudfront. No runtimse SSR is used as it isn't needed.
// ============================================================================================
//  
// https://nuxt.com/docs/api/configuration/nuxt-config
//

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  // Source modules:
  modules: ['@nuxtjs/tailwindcss'],

  // Global Styles:
  // Tailwind injects utilities while main.css holds the animation primitives
  // and any rules that are more beneficial being in CSS instead of Tailwind.
  css: ['~/assets/css/main.css'],

  // Page transitions:
  // Out-in mode used to prevent the new page from rendering until the old
  // is removed.
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  // Devtools:
  // Used locally during development, but will not be provided in the production environment.
  devtools: { enabled: true },

  // Componenets:
  // Auto-import components from app/components/ without the nested path prefixes.
  // Allows for <SiteHeader /> to work regardless of subdirectory placement.
  components: [
    { path: '~/components', pathPrefix: false }
  ]
})
