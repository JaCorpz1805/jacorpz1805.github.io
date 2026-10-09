<script setup lang="ts">
import { experience } from '@/data/experience'
</script>

<template>
  <section id="experience" class="scroll-mt-20 bg-slate-50">
    <div class="mx-auto max-w-6xl px-6 py-20">
      <h2 class="text-3xl font-bold text-slate-900">Experience</h2>
      <div class="mt-3 h-1 w-16 rounded bg-blue-600"></div>

      <ol class="mt-12 ml-3 border-l-2 border-blue-200">
        <li
          v-for="item in experience"
          :key="item.role + item.startDate"
          class="relative mb-10 ml-6 last:mb-0"
        >
          <!-- Timeline dot -->
          <span
            class="absolute top-1.5 -left-8.25 h-4 w-4 rounded-full border-2 border-white bg-blue-600"
          ></span>

          <p class="text-sm font-medium text-blue-600">{{ item.startDate }} - {{ item.endDate }}</p>
          <h3 class="mt-1 text-lg font-semibold text-slate-900">{{ item.role }}</h3>
          <p class="text-slate-500">{{ item.organization }}</p>
          <p class="mt-2 text-slate-600">{{ item.description }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
