<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface AnalystRating {
  id: number
  ticker: string
  target_from: string
  target_to: string
  company: string
  action: string
  brokerage: string
  rating_from: string
  rating_to: string
  time: string
}

const data = ref<AnalystRating[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const currentPage = ref(1)

const backendUrl = import.meta.env.VITE_URL_BACKEND

const fetchData = async (page: number = 1) => {
  loading.value = true
  error.value = null
  try {
    const url = new URL('analyst-ratings', backendUrl)
    url.searchParams.append('next_page', page.toString())
    const res = await fetch(url.toString())
    if (!res.ok) throw new Error('Error fetching data')
    const json = await res.json()
    data.value = Array.isArray(json) ? json : json.data
  } catch (err: any) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

const nextPage = () => {
  currentPage.value += 1
  fetchData(currentPage.value)
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1
    fetchData(currentPage.value)
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">Tabla de Datos</h2>
    <div v-if="loading">Cargando...</div>
    <div v-else-if="error">{{ error }}</div>
    <table v-else class="min-w-full border text-xs">
      <thead>
        <tr>
          <th class="border px-2 py-1">ID</th>
          <th class="border px-2 py-1">Ticker</th>
          <th class="border px-2 py-1">Empresa</th>
          <th class="border px-2 py-1">Acción</th>
          <th class="border px-2 py-1">Brokerage</th>
          <th class="border px-2 py-1">Rating de</th>
          <th class="border px-2 py-1">Rating a</th>
          <th class="border px-2 py-1">Target de</th>
          <th class="border px-2 py-1">Target a</th>
          <th class="border px-2 py-1">Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td class="border px-2 py-1">{{ item.id }}</td>
          <td class="border px-2 py-1">{{ item.ticker }}</td>
          <td class="border px-2 py-1">{{ item.company }}</td>
          <td class="border px-2 py-1">{{ item.action }}</td>
          <td class="border px-2 py-1">{{ item.brokerage }}</td>
          <td class="border px-2 py-1">{{ item.rating_from }}</td>
          <td class="border px-2 py-1">{{ item.rating_to }}</td>
          <td class="border px-2 py-1">{{ item.target_from }}</td>
          <td class="border px-2 py-1">{{ item.target_to }}</td>
          <td class="border px-2 py-1">{{ new Date(item.time).toLocaleDateString() }}</td>
        </tr>
      </tbody>
    </table>
    <div class="flex gap-2 mt-4">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-gray-400 text-white rounded disabled:opacity-50"
      >
        Página anterior
      </button>
      <button
        @click="nextPage"
        class="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Siguiente página
      </button>
    </div>
    <div class="mt-2 text-xs text-gray-600">Página actual: {{ currentPage }}</div>
  </div>
</template>
