/**
 * ============================================================================================
 * File: scroll-fade.js                                                                       *
 * Author: Andrew Zimmerman                                                                   *
 * Copyright: Copyright © Andrew Zimmerman 2026                                               *
 * Description: Adds a fade-and-rise animation as elements croll into view.                   *
 * Notes: Transition rules live in main.css (in assets/css/)                                  *
 * Trigger is disabled after being scrolled past to avoid distraction.                        *
 * Usage: <section v-fade-in>...</section>                                                    *
 * ============================================================================================
 */

export default defineNuxtPlugin((nuxtApp) => {
    // Reuse of one observer for all elements to keep memory bounded.
    // Map used to run per-element teardown without holding closures.
    const elementToCleanup = new WeakMap()

    nuxtApp.vueApp.directive('fade-in', {
        mounted(el) {
            el.classList.add('fade-in-target')

            const observer = new IntersectionObserver(
                (entries) => {
                    for (const entry of entries) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('fade-in-visible')
                            observer.unobserve(entry.target)
                        }
                    }
                },
                {
                    // Trigger when 15% of the element is in view.
                    // 50px bottom margin so animations begin slightly
                    // before the element is on screen.
                    threshold: 0.15,
                    rootMargin: '0px 0px -50px 0px'
                }
            )

            observer.observe(el)
            elementToCleanup.set(el, () => observer.disconnect())
        },

        unmounted(el) {
            const cleanup = elementToCleanup.get(el)
            if (cleanup) {
                cleanup()
                elementToCleanup.delete(el)
            }
        }
    })
})