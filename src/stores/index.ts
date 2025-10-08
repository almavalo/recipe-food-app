import { defineStore } from "pinia";
import { ref } from "vue";
import type { Categories, Category } from "../interfaces/categories";
import type { Meal, Meals } from "../interfaces/meals";

export const useFoodStore = defineStore("food", () => {
  const allCategories = ref<Category[]>([]);
  const meal = ref<Meal[]>([]);
  const mealByLetter = ref<Meal[]>([])
  const loader = ref(false)

  const getAllCategories = async () => {
    loader.value = true;
    try {
      const resp = await fetch(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      const data: Categories = await resp.json();
      allCategories.value = data.categories;
      loader.value = false;
    } catch (error) {
      loader.value = false;
      throw new Error("Error");
    }
  };

  const getCategory = async (val: string) => {
    loader.value = true;
    try {
      const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${val}`)
      const data: Meals = await resp.json();
      meal.value = data.meals
      loader.value = false;      
    } catch (error) {
      loader.value = false; 
      throw new Error("Error");
    }
  }

  const randomLetter = (): string => {
    const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const indice = Math.floor(Math.random() * abecedario.length);
    return (abecedario[indice] as string).toLowerCase();
  };

  const getMealByLetter = async () => {
    const letter = randomLetter(); 
    loader.value = true;
    try {
      const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      const data: Meals = await resp.json()
      mealByLetter.value = data.meals ? data.meals.slice(0, 3) : []
      loader.value = false;
    } catch (error) {
      loader.value = false;
      throw new Error("error");
    }
  }

  return {
    //Variables
    allCategories,
    meal,
    mealByLetter,
    loader,
    //Methods
    getAllCategories,
    getCategory,
    getMealByLetter
  };
});
