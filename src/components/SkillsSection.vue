<script setup lang="ts">
import { skills } from '@/data/skills'
import type { Skill } from '@/types'

const categories: Skill['category'][] = ['Programming', 'Embedded', 'Tools', 'IT Support']

function skillsFor(category: Skill['category']) {
  return skills.filter((skill) => skill.category === category)
}
</script>

<template>
  <section id="skills" class="scroll-mt-20 bg-white">
    <div class="mx-auto max-w-6xl px-6 py-20">
      <h2 class="text-3xl font-bold text-slate-900">Skills</h2>
      <div class="mt-3 h-1 w-16 rounded bg-blue-600"></div>
      <p class="mt-4 text-slate-600">Tools and technologies I work with.</p>

      <div class="mt-12 grid gap-8 sm:grid-cols-2">
        <div
          v-for="category in categories"
          :key="category"
          class="rounded-xl border border-slate-200 bg-slate-50 p-6"
        >
          <h3 class="text-lg font-semibold text-slate-900">{{ category }}</h3>

          <ul class="mt-4 flex flex-wrap gap-2">
            <li
              v-for="skill in skillsFor(category)"
              :key="skill.name"
              class="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
            >
              {{ skill.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
