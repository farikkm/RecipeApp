interface Ingredient {
    name: string
    amount: number
    unit: string
    image: string
}

export interface Recipe {
  id: number;
  title: string;
  image: string;

  summary: string
  instructions: string

  readyInMinutes: number
  extendedIngredients: Ingredient[]
}
