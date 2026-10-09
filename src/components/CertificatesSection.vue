<script setup lang="ts">
import { certifications } from '@/data/certificates'
</script>

<template>
  <section id="certifications" class="scroll-mt-20 bg-white">
    <div class="mx-auto max-w-6xl px-6 py-20">
      <h2 class="text-3xl font-bold text-slate-900">Certifications</h2>
      <div class="mt-3 h-1 w-16 rounded bg-blue-600"></div>
      <p class="mt-4 text-slate-600">Training and participations I've earned.</p>

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="cert in certifications"
          :key="cert.id"
          class="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:shadow-md"
        >
          <!-- Certificate image or placeholder -->
          <a
            v-if="cert.image"
            :href="cert.image"
            target="_blank"
            rel="noopener noreferrer"
            class="block bg-white"
            aria-label="View full certificate image"
          >
            <img
              :src="cert.image"
              :alt="`Certificate: ${cert.title}`"
              class="h-48 w-full object-contain p-2"
            />
          </a>
          <div v-else class="h-48 bg-slate-200"></div>

          <!-- Details -->
          <div class="flex flex-1 flex-col p-6">
            <p class="text-sm font-medium text-blue-600">{{ cert.date }}</p>
            <h3 class="mt-1 text-lg font-semibold text-slate-900">{{ cert.title }}</h3>
            <p class="mt-1 text-slate-500">{{ cert.issuer }}</p>

            <a
              v-if="cert.credentialUrl"
              :href="cert.credentialUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-auto pt-4 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
            >
              View Credential
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
