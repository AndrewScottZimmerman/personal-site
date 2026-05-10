<!--
============================================================================================
| File: ContactModal.vue                                                                   |
| Author: Andrew Scott Zimmerman                                                           |
| Copyright: Copyright © Andrew Zimmerman 2026                                             |
| Description: The ContactModal. A component designed to provide a way to email or message |
| me. Currently listing just an email, but will switch to a form at launch.                |
============================================================================================
-->
<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

// Email split into a charachter arrays to minimize scraping until form variant is provided
// when AWS setup is complete.
const emailParts = {
  user:   ['a','n','d','r','e','w','s','z','i','m','m','e','r','m','a','n'],
  domain: ['o','u','t','l','o','o','k'],
  tld:    ['c','o','m']
}

const email = computed(
  () => `${emailParts.user.join('')}@${emailParts.domain.join('')}.${emailParts.tld.join('')}`
)

const copied = ref(false)
const dialogRef = ref(null)
const previouslyFocused = ref(null)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email.value)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch (err) {
    // If browsers do not have Clipboard API will fall back to select.
    console.error('Clipboard write failed:', err)
  }
}

const closeModal = () => {
  copied.value = false
  emit('close')
}

const onKeydown = (event) => {
  if (event.key === 'Escape' && props.isOpen) closeModal()
}

// Lock body scroll while the modal is open.
watch(() => props.isOpen, (open) => {
  if (typeof document === 'undefined') return

  if (open) {
    previouslyFocused.value = document.activeElement
    document.body.style.overflow = 'hidden'
    nextTick(() => dialogRef.value?.focus())
  } else {
    document.body.style.overflow = ''
    previouslyFocused.value?.focus?.()
  }
})

onMounted(() => document.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center p-6"
        role="presentation"
        @click.self="closeModal"
      >
        <div class="absolute inset-0 bg-black/50" aria-hidden="true" />

        <div
          ref="dialogRef"
          tabindex="-1"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          class="relative bg-bg-primary rounded-sm shadow-2xl max-w-md w-full p-8"
        >
          <button
            type="button"
            class="absolute top-4 right-4 text-ink-secondary hover:text-ink-primary transition-colors"
            aria-label="Close dialog"
            @click="closeModal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>

          <h3 id="contact-modal-title" class="font-serif text-h3 text-ink-primary mb-3">
            Get in touch
          </h3>

          <p class="font-serif text-body text-ink-primary mb-6 leading-relaxed">
            You can reach me at the email below. Click to copy.
          </p>

          <button
            type="button"
            class="email-button w-full"
            @click="copyEmail"
          >
            <span class="font-mono text-small">{{ email }}</span>
            <span class="font-sans text-small">{{ copied ? 'Copied!' : 'Copy →' }}</span>
          </button>

          <p class="font-sans text-small text-ink-secondary mt-6 leading-relaxed">
            Please note that client inquiries should be placed through your
            Advisor or through other official Fidelity channels.
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.email-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background-color: theme('colors.accent.navy');
  color: theme('colors.bg.primary');
  padding: 1rem 1.25rem;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 200ms ease-out;
}

.email-button:hover {
  background-color: #2a3a64; /* manual lighten of accent.navy */
}
</style>