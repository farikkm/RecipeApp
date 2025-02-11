import { useState } from "react";
import { Recipe } from "../types";

const API_KEY = "17ca904bd1fe4b9caa14b70958ca3815";
const API_URL = 'https://api.spoonacular.com/recipes/complexSearch';

export default function useFetchSearchRecipes() {
   const [recipes, setRecipes] = useState<Recipe[]>([])
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState<string | null>(null)

   const searchRecipe = async (query: string) => {
      if (!query.trim()) return;

      setLoading(true)
      setError(null);

      const url = `${API_URL}?apiKey=${API_KEY}&query=${query}`;

      try {
         const res = await fetch(url)
         const data = await res.json()
         setRecipes(data.results || [])
      } catch (err) {
         console.error(err);
      } finally {
         setLoading(false)
      }
   }

   return {recipes, loading, error, searchRecipe}
}