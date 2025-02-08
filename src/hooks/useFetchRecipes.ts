import { useState, useEffect } from "react";
import { Recipe } from '../types'

const API_KEY = "17ca904bd1fe4b9caa14b70958ca3815";
const RANDOM_RECIPES_URL = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=12`;

export function useFetchRecipes() {
   const [randomRecipes, setRandomRecipes] = useState<Recipe[]>([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState<string | null>(null)

   useEffect(() => {
      fetch(RANDOM_RECIPES_URL)
         .then((response) => response.json())
         .then((data) => {
            setRandomRecipes(data.recipes)
            setLoading(false)
         })
         .catch((err) => {
            setError(err.message)
            setLoading(false) 
         })
   }, [])

   return {randomRecipes, loading, error}
}