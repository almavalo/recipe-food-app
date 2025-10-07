import { defineStore } from "pinia";
import { ref } from "vue";
import type { Categories, Category } from "../interfaces/categories";
import type { Meal, Meals } from "../interfaces/meals";

export const useFoodStore = defineStore("food", () => {
  const allCategories = ref<Category[]>([]);
  const meal = ref<Meal[]>([]);

  const getAllCategories = async () => {
    try {
      const resp = await fetch(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      const data: Categories = await resp.json();

      allCategories.value = data.categories;
    } catch (error) {
      throw new Error("Error");
    }
  };

  const getCategory = async (val: string) => {
    try {
      const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${val}`)
      const data: Meals = await resp.json();
      meal.value = data.meals
      
    } catch (error) {
      
    }
  }

  return {
    //Variables
    allCategories,
    meal,
    //Methods
    getAllCategories,
    getCategory
  };
});
