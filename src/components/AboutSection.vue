<script setup lang="ts">
import { ref } from 'vue'

const hasPhoto = ref(true)
</script>

<template>
  <section id="about" class="scroll-mt-20 bg-white">
    <div class="mx-auto max-w-6xl px-6 py-20">
      <h2 class="text-3xl font-bold text-slate-900">About Me</h2>
      <div class="mt-3 h-1 w-16 rounded bg-blue-600"></div>

      <div class="mt-12 grid items-center gap-12 md:grid-cols-3">
        <!-- Photo -->
        <div class="flex justify-center">
          <img
            v-if="hasPhoto"
            src="/myportfoliophoto.jpg"
            alt="Portrait of Your Name"
            class="h-64 w-64 rounded-2xl object-cover shadow-lg"
            @error="hasPhoto = false"
          />
          <div
            v-else
            class="flex h-64 w-64 items-center justify-center rounded-2xl bg-slate-200 text-slate-500"
          >
            Your photo here
          </div>
        </div>

        <!-- Text -->
        <div class="md:col-span-2">
          <p class="leading-relaxed text-slate-600">
            I'm a 4th year Computer Engineering student at Cagayan State University - Carig Campus,
            who has a passion for technology and innovation. I enjoy working with computers,
            electronics, networking, Aritificial Intelligence,and programming, and I'm always
            looking for ways to improve my skills and knowledge.
          </p>
          <p class="mt-4 leading-relaxed text-slate-600">
            I'm willing to learn, and I like turning practical problems into simple, reliable
            solutions. I'm open to work, internships, and collaborations.
          </p>

          <!-- Quick facts -->
          <dl class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <dt class="text-sm text-slate-500">Address</dt>
              <dd class="font-medium text-slate-900">
                Centro 04, Tuguegarao City, Cagayan, Philippines
              </dd>
            </div>
            <div>
              <dt class="text-sm text-slate-500">Focus</dt>
              <dd class="font-medium text-slate-900">
                Networking, Programming, Computer troubleshooting, and Artificial Intelligence
              </dd>
            </div>
            <div>
              <dt class="text-sm text-slate-500">Languages</dt>
              <dd class="font-medium text-slate-900">English, Filipino</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>
