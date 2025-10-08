<template>

  <section v-if="isLoading">
    <Spinner />
  </section>
  <section v-else>
    <h1 class="text-green text-center text-3xl pb-5 underline">Comidas Favoritas</h1>
    <PrincipalFoods />
    <ListCategorys />
    <VegetarianFood />
  </section>
  

</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import Spinner from '../components/atoms/Spinner.vue';
import PrincipalFoods from '../layout/PrincipalFoods.vue';
import VegetarianFood from '../layout/VegetarianFood.vue';
import ListCategorys from '../layout/ListCategorys.vue';
import { useMealStore } from '../stores/useMealStore';

const storeFood = useMealStore()
const isLoading = computed(() => storeFood.loader)

onMounted(async () => {
  await storeFood.getMealByLetter()
})
</script>

<style scoped></style>