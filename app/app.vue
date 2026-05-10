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
        // Open Graph defaults; pages can overrider per route.
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Andrew Scott Zimmerman' },
        { property: 'og:description', content: 'Financial services professional working at the intersection of investments, analysis, and software.' }
    ],
    link: [
        // Preconnect to fonts so the browser establishes TLS in parallel with HTML parsing.
        { rel: 'reconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&'
        }
    ]
})
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>