<!--
============================================================================================
|  File: default.vue                                                                       |
|  Author: Andrew Scott Zimmerman                                                          |
|  Copyright: Copyright © Andrew Zimmerman 2026                                            |
|  Description: Default layout for all pages. Wraps the route in the header and footer.    |
|  Ensures viewport fill so that the footer stays at the bottom on shorter pages.          |
============================================================================================
-->
<template>
  <div class="bg-bg-primary text-ink-primary font-serif antialiased min-h-screen flex flex-col">
    <SiteHeader />
    <main id="main" class="flex-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
