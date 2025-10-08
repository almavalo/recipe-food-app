<template>
  <section class="relative w-full overflow-hidden">
    <!-- Flecha izquierda -->
    <button @click="prev" :disabled="isAtStart" :class="[
      'absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2',
      isAtStart ? 'opacity-50 cursor-not-allowed' : ''
    ]">
      ◀
    </button>

    <!-- Carrusel -->
    <div class="flex transition-transform duration-300 ease-in-out" :style="carouselStyle">
      <div v-for="(category) in categories" :key="category.idCategory" class=" w-1/6 px-2">
        <div class="flex flex-col items-center">
          <img
          @click="goCategory(category.strCategory)"
          :src="category.strCategoryThumb"
           :alt="category.strCategory"
           class="cursor-pointer w-16 sm:w-20 md:w-24 h-24 object-cover rounded-full border-2 bg-cream" />
          <p class="mt-2 text-center text-sm font-semibold text-green">
            {{ category.strCategory }}
          </p>
        </div>
      </div>
    </div>

    <!-- Flecha derecha -->
    <button @click="next" :disabled="isAtEnd" :class="[
      'absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2',
      isAtEnd ? 'opacity-50 cursor-not-allowed' : ''
    ]">
      ▶
    </button>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCategoryStore } from '../../stores/useCategoryStore'
import { useRouter } from 'vue-router'

const router = useRouter()

const store = useCategoryStore()
const categories = store.allCategories

const currentIndex = ref(0)
const visibleCount = 6

const isAtStart = computed(() => currentIndex.value === 0)
const isAtEnd = computed(() => currentIndex.value >= categories.length - visibleCount)

const carouselStyle = computed(() => {
  const offset = currentIndex.value * (100 / visibleCount)
  return {
    transform: `translateX(-${offset}%)`,
    width: `${(categories.length * 100) / visibleCount}%`
  }
})

const next = () => {
  if (!isAtEnd.value) currentIndex.value++
}

const prev = () => {
  if (!isAtStart.value) currentIndex.value--
}

const goCategory = (val: string) => {
  router.push({ name: 'category', params: { name: val } })
}

</script>

<style scoped>
/* Opcional: animación suave */
</style>
