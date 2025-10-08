<template>
  <h1 class="text-green text-center text-3xl pb-5 underline">Comidas Favoritas</h1>
  <Spinner v-if="isLoading" />
  <PrincipalFoods v-else/>
  <VegetarianFood />
  

</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useFoodStore } from '../stores';
import Spinner from '../components/atoms/Spinner.vue';
import PrincipalFoods from '../layout/PrincipalFoods.vue';
import VegetarianFood from '../layout/VegetarianFood.vue';

const storeFood = useFoodStore()
const isLoading = computed(() => storeFood.loader)

onMounted(async () => {
  await storeFood.getMealByLetter()
})
</script>

<style scoped></style>