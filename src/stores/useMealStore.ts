import { defineStore } from "pinia";
import { ref } from "vue";
import type { Meal, Meals } from "../interfaces/meals";

export const useMealStore = defineStore("meal", () => {
  const meal = ref<Meal[]>([]);
  const mealByLetter = ref<Meal[]>([]);
  const mealById = ref<Meal | null>(null)
  const loader = ref(false);

  const randomLetter = (): string => {
    const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const indice = Math.floor(Math.random() * abecedario.length);
    return (abecedario[indice] as string).toLowerCase();
  };

  const getMealByLetter = async () => {
    const letter = randomLetter();
    loader.value = true;
    try {
      const resp = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
      );
      const data: Meals = await resp.json();
      if (data.meals) {
        mealByLetter.value = data.meals.slice(0, 3);
      } else {
        const resp = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=a`
        );
        const data: Meals = await resp.json();
        mealByLetter.value = data.meals.slice(0, 3);
      }
    } catch (error) {
      console.log({ error });
      throw new Error("error");
    } finally {
      loader.value = false;
    }
  };

  const getMealById = async (id: string) => {
    loader.value = true;
    try {
      const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      const data: Meals = await resp.json()
      mealById.value = data.meals?.[0] ?? null
    } catch (error) {
      throw new Error("error");
    }finally {
      loader.value = false;
    }
  } 

  return {
    //Variables
    meal,
    mealByLetter,
    mealById,
    loader,
    //Methods
    getMealByLetter,
    getMealById
  };
});
