<template>
  <h1 class="text-green text-center text-3xl pb-5 underline">{{ nameCategory }}</h1>
  <Spinner v-if="foodStore.loader"/>
  <section v-else class="px-4 grid grid-cols-4 gap-4">
    <CardFood v-for="meal in foodStore.meal" :key="meal.idMeal" :meal="meal"/>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useCategoryStore } from '../stores/useCategoryStore';
import CardFood from '../components/organisms/CardFood.vue';
import Spinner from '../components/atoms/Spinner.vue';

const foodStore = useCategoryStore();
const route = useRoute()

const nameCategory = ref<string | string[] |undefined>('')

onMounted(() => {
  const initialCategory = route.params.name
  nameCategory.value = initialCategory;
  console.log({initialCategory});
  if (typeof initialCategory != 'string') return
  foodStore.getCategory(initialCategory)
})

watch(() => route.params.name,
  (newCategory) => {
    if(typeof newCategory != 'string') return
    foodStore.getCategory(newCategory)
    nameCategory.value = newCategory;
  })


</script>

<style scoped></style>