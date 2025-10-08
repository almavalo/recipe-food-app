<template>
  <h1 class="text-green text-center text-3xl pt-5 pb-5 underline">Recetas Vegetarianas</h1>
  <section class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <CardFood v-for="meal in vegFood" :key="meal.idMeal" :meal="meal" />
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import CardFood from '../components/organisms/CardFood.vue';
import { useFoodStore } from '../stores';
import type { Meal } from '../interfaces/meals';

const vegFood = ref<Meal[]>([])

const foodStore = useFoodStore();
vegFood.value = foodStore.meal.slice(0, 4)

onMounted(()=> {
  foodStore.getCategory('vegetarian')
})


</script>

<style scoped>

</style>