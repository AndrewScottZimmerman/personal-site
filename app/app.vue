<!--
============================================================================================
| File: app.vue                                                                            |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The root Vue component. This component loads document-level metadata and    |
| font preloads. Then, it delegates layout to the default layout (app/layouts/default.vue).|
|                                                                                          |
| The site header and footer lives in the layout instead of here so future pages can opt   |
| into a different layout without changing this root componenent.                          |
============================================================================================
-->
<script setup>
useHead({
    htmlAttrs: { lang: 'en' },
    titleTemplate: (title) => title || 'Andrew Scott Zimmerman',
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
            name: 'description',
            content: 'Financial services professional working at the intersection of investements, analysis, and software.'
        },
        { name: 'apple-mobile-web-app-title', content: 'Andrew Zimmerman' },
        // Open Graph defaults; pages can overrider per route.
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Andrew Scott Zimmerman' },
        { property: 'og:description', content: 'Financial services professional working at the intersection of investments, analysis, and software.' }
    ],
    link: [
        // Favicons
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        // Fonts
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap'
        }
    ]
})
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>