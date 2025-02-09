import { Recipe } from "../types";
import RecipeItem from "./RecipeItem";

interface Props {
    recipes: Recipe[]
}


export default function RecipeItems({ recipes }: Props) {
    return (
        <div className="row">
            {recipes.map((recipe: Recipe) => (
                <RecipeItem recipe={recipe}/>
            ))}
        </div>
    )
}