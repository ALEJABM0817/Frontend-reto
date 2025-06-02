<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Recommendation {
  recommendation: string
  company: string
  buy_count: number
  max_target_to: number
  max_diff: number
}

const recommendation = ref<Recommendation | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)

const backendUrl = import.meta.env.VITE_URL_BACKEND

const fetchRecommendation = async (): Promise<void> => {
  loading.value = true
  error.value = null
  try {
    const url = new URL('recommendation', backendUrl)
    const res = await fetch(url.toString())
    if (!res.ok) throw new Error('Error al obtener la recomendación')
    recommendation.value = await res.json()
  } catch (err: any) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchRecommendation()
})
</script>

<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">Recomendación de Inversión</h2>
    <div v-if="loading">Cargando...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="recommendation">
      <div class="bg-green-100 p-4 rounded shadow">
        <p class="font-semibold">Mejor acción para invertir:</p>
        <p class="text-lg font-bold">{{ recommendation.recommendation }}</p>
        <p>Empresa: {{ recommendation.company }}</p>
        <p>Cantidad de recomendaciones de compra: {{ recommendation.buy_count }}</p>
        <p>Precio objetivo máximo: ${{ recommendation.max_target_to }}</p>
        <p>Diferencia máxima: ${{ recommendation.max_diff }}</p>
      </div>
    </div>
    <div v-else>
      <p>No hay recomendación disponible.</p>
    </div>
  </div>
</template>
