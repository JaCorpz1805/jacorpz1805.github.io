<script setup lang="ts">
const base = import.meta.env.BASE_URL
</script>

<template>
  <section
    id="home"
    class="flex min-h-screen scroll-mt-20 items-center bg-linear-to-br from-blue-50 via-white to-blue-100"
  >
    <div class="mx-auto max-w-6xl px-6 py-20">
      <p class="mb-4 font-medium text-blue-600 md:text-4xl">Hi, my name is</p>

      <h1 class="text-4xl font-bold text-slate-900 md:text-5xl">James Allistaire F. Corpuz</h1>

      <h2 class="mt-4 text-2xl text-slate-600 md:text-3xl">
        IT Support, Embedded Systems, Programmer, and Tech Geek
      </h2>

      <p class="mt-6 max-w-xl text-slate-600">
        I troubleshoot hardware, program microcontrollers, develop network, and build GUI software
      </p>

      <div class="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          class="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
        >
          View Projects
        </a>
        <a
          href="#contact"
          class="rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-800 transition-colors hover:bg-white"
        >
          Contact Me
        </a>
        <a
          :href="`${base}curriculumvitae_jamesafcorpuz.pdf`"
          download="James_Allistaire_F._Corpuz-Resume.pdf"
          class="rounded-lg border border-blue-600 px-6 py-3 font-medium text-blue-600 transition hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Download Resume
        </a>
      </div>
    </div>
  </section>
</template>
