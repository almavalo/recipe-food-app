<template>
  <section class="grid grid-cols-2 items-center">
    <h3 class="text-green text-center">Categorías</h3>
    <select v-model="valCategory" class="border rounded px-3 py-2 text-sm bg-white text-green">
      <option value="">Seleccione</option>
      <option v-for="cate in storeFood.allCategories" :key="cate.idCategory" :value="cate.strCategory">{{
        cate.strCategory }}</option>
    </select>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useFoodStore } from '../../stores';
import { useRoute, useRouter } from 'vue-router'

const storeFood = useFoodStore()
const valCategory = ref<string>('')
const router = useRouter()
const route = useRoute()


watch(valCategory, (val) => {
  if (val) {
    router.push({ name: 'category', params: { name: val } })
  }
})

watch(() => route.name === 'home', () => {
  valCategory.value = ''
})

onMounted(async () => {
  await storeFood.getAllCategories()
})


</script>

<style scoped></style>