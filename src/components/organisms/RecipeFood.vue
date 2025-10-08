<template>
  <section class="mx-10">
    <article class="my-6">
    <section
      class="relative w-full h-64 bg-cream border rounded-lg overflow-hidden text-center flex flex-col justify-center shadow-md"
    >
      <div
        class="absolute inset-0 bg-center bg-cover opacity-60"
        :style="{ backgroundImage: `url(${meal.strMealThumb})` }"
      ></div>

      <div class="relative z-10 px-4">
        <h1 class="text-green text-2xl font-bold mb-1">{{ meal.strMeal }}</h1>
        <h2 class="text-black text-lg font-semibold mb-1">{{ meal.strCategory }}</h2>
        <h4 class="text-white text-base font-medium mb-1">{{ meal.strArea }}</h4>
        <h5 v-if="meal.strTags" class="text-white text-sm font-medium">{{ meal.strTags }}</h5>
      </div>
    </section>
  </article>
  <article class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
    <section class="bg-cream border rounded-lg text-center flex flex-col justify-center p-4 shadow-md">
      <h1 class="text-black text-2xl font-bold mb-4">Ingredientes</h1>
      <ul class="space-y-2">
        <li
          v-for="(ingredient, index) in ingredients"
          :key="index"
          class="text-black text-base font-medium"
        >
          {{ ingredient }}
        </li>
      </ul>
    </section>

    <section class="bg-cream border rounded-lg text-center flex flex-col justify-center p-4 shadow-md">
      <h1 class="text-black text-2xl font-bold mb-4">Preparación</h1>
      <p class="text-black text-base font-medium whitespace-pre-line">
        {{ meal.strInstructions }}
      </p>
    </section>
  </article>
  <article v-if="youtubeEmbedUrl" class="my-6">
    <section class="bg-cream border rounded-lg overflow-hidden shadow-md">
      <iframe
        :src="youtubeEmbedUrl"
        class="w-full h-100"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </section>
  </article>
  </section>
</template>

<script setup lang="ts">
import type { Meal } from '../../interfaces/meals'

const props = defineProps<{ meal: Meal }>()

// Extraer ingredientes + medidas dinámicamente
const ingredients = Object.entries(props.meal)
  .filter(([key, value]) => key.startsWith('strIngredient') && value && value.trim())
  .map(([key, value], i) => {
    const measure = props.meal[`strMeasure${i + 1}` as keyof Meal]
    return `${value} - ${measure ?? ''}`.trim()
  })

const youtubeEmbedUrl = props.meal.strYoutube
  ? props.meal.strYoutube.replace('watch?v=', 'embed/')
  : ''
</script>

<style scoped>

</style>
