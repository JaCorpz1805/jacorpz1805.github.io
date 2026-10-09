<script setup lang="ts">
import { projects } from '@/data/projects'
</script>

<template>
  <section id="projects" class="scroll-mt-20 bg-slate-50">
    <div class="mx-auto max-w-6xl px-6 py-20">
      <h2 class="text-3xl font-bold text-slate-900">Projects</h2>
      <div class="mt-3 h-1 w-16 rounded bg-blue-600"></div>
      <p class="mt-4 text-slate-600">Some things I've built.</p>

      <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="project in projects"
          :key="project.id"
          class="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
        >
          <!-- Image or placeholder -->
          <img
            v-if="project.image"
            :src="project.image"
            :alt="`Screenshot of ${project.title}`"
            class="h-48 w-full object-cover"
          />
          <div v-else class="h-48 bg-slate-200"></div>

          <!-- Body -->
          <div class="flex flex-1 flex-col p-6">
            <h3 class="text-lg font-semibold text-slate-900">{{ project.title }}</h3>
            <p class="mt-2 text-sm text-slate-600">{{ project.description }}</p>

            <!-- Tech tags -->
            <ul class="mt-4 flex flex-wrap gap-2">
              <li
                v-for="tech in project.technologies"
                :key="tech"
                class="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
              >
                {{ tech }}
              </li>
            </ul>

            <!-- Buttons -->
            <div class="mt-auto flex gap-4 pt-6">
              <a
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
              >
                GitHub
              </a>
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
