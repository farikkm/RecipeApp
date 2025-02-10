import { useState, useEffect } from "react";
import { Recipe } from "../types";

const API_KEY = "17ca904bd1fe4b9caa14b70958ca3815";
const API_URL = 'https://api.spoonacular.com/recipes/';

export default function useFetchRecipeInfo(id: string | undefined) {
   const [recipe, setRecipe] = useState<Recipe | null>(null)

   useEffect(() => {
      const url = `${API_URL}/${id}/information?apiKey=${API_KEY}`
      fetch(url)
         .then((res) => res.json())
         .then((data) => setRecipe(data))
         .catch((error) => console.error(error))
   }, [id])

   return recipe;
}