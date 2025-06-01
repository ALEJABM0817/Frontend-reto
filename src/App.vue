<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-blue-600 text-white shadow-md">
    <nav class="container mx-auto flex items-center justify-between py-4 px-6">
        <RouterLink to="/">Inicio</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>
