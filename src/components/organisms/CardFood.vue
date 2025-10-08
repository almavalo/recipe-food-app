<template>
  <article class="w-full max-w-sm mx-auto border rounded shadow-md overflow-hidden bg-cream hover:scale-[1.02] transition">
    <ImgFood :src="meal.strMealThumb" :alt="meal.strMeal"/>
    <section class="p-4 text-center">
      <h3 class="text-lg font-semibold text-green mb-2">{{ meal.strMeal }}</h3>
      <h5 class="font-semibold text-black mb-2">{{ meal.strCategory }}</h5>
      <BtnFood label="Ver receta" class="cursor-pointer hover:scale-[1.2] transition" :onClick="goDetail"/>
    </section>
  </article>
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router';
import type { Meal } from '../../interfaces/meals';
import BtnFood from '../atoms/BtnFood.vue';
import ImgFood from '../atoms/ImgFood.vue';

const props = defineProps<{meal: Meal}>()
const router = useRouter()

const goDetail = () => {
   router.push({ name: 'recipe', params: { id: props.meal.idMeal } })
}


</script>

<style scoped>

</style>