<template>
  <section :class="['w-full', 'gap-4', 'grid', mealCount === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
    mealCount == 2 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2' : 'grid-cols-1']">
    <CardFood v-if="mealCount > 0" v-for="meal in storeFood.mealByLetter" :key="meal.idMeal" :meal="meal" />
    <h1 v-else class="text-green text-center text-3xl pb-5 underline">Estamos cocinando para ti! Actualiza la pagina...
    </h1>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CardFood from '../components/organisms/CardFood.vue';
import { useFoodStore } from '../stores';

const storeFood = useFoodStore()
const mealCount = computed(() => storeFood.mealByLetter.length)

</script>

<style scoped></style>