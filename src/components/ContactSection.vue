<script setup lang="ts">
import { socialLinks } from '@/data/links'

const emailLink = socialLinks.find((link) => link.url.startsWith('mailto:'))
const otherLinks = socialLinks.filter((link) => !link.url.startsWith('mailto:'))
</script>

<template>
  <section id="contact" class="scroll-mt-20 bg-slate-50">
    <div class="mx-auto max-w-6xl px-6 py-20 text-center">
      <h2 class="text-3xl font-bold text-slate-900">Get In Touch</h2>
      <div class="mx-auto mt-3 h-1 w-16 rounded bg-blue-600"></div>

      <p class="mx-auto mt-4 max-w-xl text-slate-600">
        I'm open to work, internships, and collaborations. Send me a message and I'll reach out to
        you.
      </p>

      <!-- Main button: email -->
      <a
        v-if="emailLink"
        :href="emailLink.url"
        class="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700"
      >
        Email Me: jamescorpuz1805@gmail.com
      </a>

      <!-- Other links -->
      <div class="mt-8 flex flex-wrap justify-center gap-6">
        <a
          v-for="link in otherLinks"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="font-medium text-slate-600 transition-colors hover:text-blue-600"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </section>
</template>
