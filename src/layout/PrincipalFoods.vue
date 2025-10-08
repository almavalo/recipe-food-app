<template>
  <section :class="['px-4' ,'w-full','gap-4', 'grid', 'justify-center',mealCount === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
    mealCount == 2 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2' : 'grid-cols-1']">
    <CardFood v-for="meal in storeFood.mealByLetter" :key="meal.idMeal" :meal="meal" />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CardFood from '../components/organisms/CardFood.vue';
import { useMealStore } from '../stores/useMealStore';

const storeFood = useMealStore()
const mealCount = computed(() => storeFood.mealByLetter.length)

</script>

<style scoped></style>