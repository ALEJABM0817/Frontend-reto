<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'

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
const search = ref('')

const fetchData = async (page: number = 1, searchTerm: string = '') => {
  loading.value = true
  error.value = null
  try {
    const url = new URL('analyst-ratings', backendUrl)
    url.searchParams.append('next_page', page.toString())
    if (searchTerm) {
      url.searchParams.append('search', searchTerm)
    }
    url.searchParams.append('sortKey', sortKey.value)
    url.searchParams.append('sortOrder', sortOrder.value)
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

const onSearch = () => {
  currentPage.value = 1
  fetchData(currentPage.value, search.value)
}

const hasNextPage = computed(() => data.value.length > 0)

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

const sortKey = ref<'id' | 'ticker' | 'company' | 'action' | 'brokerage' | 'rating_from' | 'rating_to' | 'target_from' | 'target_to' | 'time'>('company')
const sortOrder = ref<'asc' | 'desc'>('asc')

watch([sortKey, sortOrder], () => {
  currentPage.value = 1
  fetchData(currentPage.value, search.value)
})

onMounted(() => {
  fetchData()
})
</script>

<template>
  <div class="p-2 md:p-4 max-w-5xl mx-auto">
    <h2 class="text-lg md:text-xl font-bold mb-4">Tabla de Datos</h2>
    <div class="flex flex-col md:flex-row gap-2 mb-4 items-start md:items-center">
      <input
        v-model="search"
        @keyup.enter="onSearch"
        type="text"
        placeholder="Buscar por Ticker, Empresa, Acción..."
        class="border rounded px-2 py-1 text-xs md:text-sm flex-grow"
      />
      <button
        @click="onSearch"
        class="px-4 py-2 bg-blue-500 text-white rounded text-xs md:text-sm"
      >
        Buscar
      </button>
      <label class="font-semibold">Ordenar por:</label>
      <select v-model="sortKey" class="border rounded px-2 py-1 text-xs md:text-sm">
        <option value="id">ID</option>
        <option value="ticker">Ticker</option>
        <option value="company">Empresa</option>
        <option value="action">Acción</option>
        <option value="brokerage">Brokerage</option>
        <option value="rating_from">Rating de</option>
        <option value="rating_to">Rating a</option>
        <option value="target_from">Target de</option>
        <option value="target_to">Target a</option>
        <option value="time">Fecha</option>
      </select>
      <button
        @click="sortOrder = sortOrder === 'asc' ? 'desc' : 'asc'"
        class="px-2 py-1 bg-gray-200 rounded text-xs md:text-sm"
      >
        {{ sortOrder === 'asc' ? 'Ascendente' : 'Descendente' }}
      </button>
    </div>
    <div v-if="loading">Cargando...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="overflow-x-auto">
      <table class="min-w-full border text-xs md:text-sm">
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
    </div>
    <div class="flex flex-col sm:flex-row gap-2 mt-4">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-gray-400 text-white rounded disabled:opacity-50"
      >
        Página anterior
      </button>
      <button
        @click="nextPage"
        :disabled="!hasNextPage"
        class="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Siguiente página
      </button>
    </div>
    <div class="mt-2 text-xs text-gray-600">Página actual: {{ currentPage }}</div>
  </div>
</template>
