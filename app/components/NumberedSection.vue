<!--
============================================================================================
| File: NumberedSection.vue                                                                |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The NumberedSection component. Used for the editorial section on About.vue. |
| Ensures text only sections are consistent and designed similarly.                        |
============================================================================================
-->
<script setup>
defineProps({
    number: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div>
        <div class="font-sans text-small text-ink-secondary mb-2 tracking-wider-caps">
            {{ number }}
        </div>
        <h2 class="font-serif text-h3 text-accent-navy mb-6">
            {{ title }}
        </h2>
        <div class="font-serif text-body text-ink-primary leading-relaxed">
            <slot />
        </div>
    </div>
</template>