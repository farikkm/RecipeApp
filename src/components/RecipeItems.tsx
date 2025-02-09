import { Recipe } from "../types";
import RecipeItem from "./RecipeItem";

interface Props {
    recipes: Recipe[]
}

export default function RecipeItems({ recipes }: Props) {
    return (
        <div className="recipes row mt-3">
            {recipes.map((recipe: Recipe) => (
                <RecipeItem key={recipe.id} recipe={recipe}/>
            ))}
        </div>
    )
}