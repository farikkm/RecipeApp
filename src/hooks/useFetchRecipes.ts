import { useState, useEffect } from "react";
import { Recipe } from '../types'

const API_KEY = "17ca904bd1fe4b9caa14b70958ca3815";
const API_URL = 'https://api.spoonacular.com/recipes/random';

export function useFetchRecipes(filters: Record<string, boolean>) {
   const [recipes, setRecipes] = useState<Recipe[]>([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState<string | null>(null)

   const fetchRecipes = async () => {
      setLoading(true)
      setError(null)

      const filterParams = Object.keys(filters || {})
         .filter((key) => filters?.[key])
         .join(",")

      const url = filterParams 
         ? `${API_URL}?apiKey=${API_KEY}&number=12&include-tags=${filterParams}`
         : `${API_URL}?apiKey=${API_KEY}&number=20`

      fetch(url)
         .then((response) => response.json())
         .then((data) => {
            const filteredRecipes = data.recipes.filter((recipe: any) => recipe.image)
            setRecipes(filteredRecipes)
            setLoading(false)
         })
         .catch((err) => {
            setError(err.message)
            setLoading(false) 
         })
   }

   useEffect(() => {
      fetchRecipes()
   }, [filters])

   return {recipes, loading, error, fetchRecipes}
}