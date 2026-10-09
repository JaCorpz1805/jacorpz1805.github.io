<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <!-- Brand -->
      <a href="#home" class="text-xl font-bold text-slate-900">
        Hydromatter <span class="text-blue-600">Devportfolio</span>
      </a>

      <!-- Desktop links -->
      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Hamburger button (mobile only) -->
      <button
        class="rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
        :aria-label="isOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="isOpen"
        @click="toggleMenu"
      >
        <svg
          v-if="!isOpen"
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <ul v-if="isOpen" class="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
      <li v-for="link in links" :key="link.href">
        <a
          :href="link.href"
          class="block py-2 text-base font-medium text-slate-700 hover:text-blue-600"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>
  </header>
</template>
