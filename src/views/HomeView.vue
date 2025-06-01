<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const goToTable = (): void => {
  router.push({ name: 'tabla-datos' })
}
const goToReport = (): void => {
  router.push({ name: 'recommendation' })
}
</script>

<template>
  <div class="flex flex-col items-center gap-4 mt-10">
    <h1 class="text-2xl font-bold">Bienvenido</h1>
    <p>Elige las opciones que deseas:</p>
    <div class="flex gap-4">
      <button
        @click="goToTable"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
      >
        Ver tabla de Datos
      </button>
      <button
        @click="goToReport"
        class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
      >
        Ver recomendaciones de inversion
      </button>
    </div>
  </div>
</template>
