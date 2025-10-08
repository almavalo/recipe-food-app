<template>
  <Spinner v-if="store.loader" />
  <section v-else>
    <RecipeFood v-if="store.mealById" :meal="store.mealById"/>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useMealStore } from '../stores/useMealStore';
import { onMounted } from 'vue';
import Spinner from '../components/atoms/Spinner.vue';
import RecipeFood from '../components/organisms/RecipeFood.vue';


const route = useRoute()
const mealId = route.params.id as string
  
const store = useMealStore();

onMounted(() => {
  store.getMealById(mealId)
})
</script>

<style scoped></style>