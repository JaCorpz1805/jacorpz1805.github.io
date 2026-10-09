<script setup lang="ts">
import { socialLinks } from '@/data/links'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-slate-900 py-8 text-slate-300">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 md:flex-row md:justify-between"
    >
      <!-- Left: copyright -->
      <p class="text-sm">&copy; {{ year }} HydromatterDevPortfolio. All rights reserved.</p>

      <!-- Right: social links -->
      <ul class="flex gap-6">
        <li v-for="link in socialLinks" :key="link.label">
          <a
            :href="link.url"
            :target="link.url.startsWith('http') ? '_blank' : undefined"
            :rel="link.url.startsWith('http') ? 'noopener noreferrer' : undefined"
            class="text-sm text-slate-400 transition-colors hover:text-white"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
