import { Recipe } from "../types";

interface Props {
    recipe: Recipe
}

export default function RecipeItem({ recipe }: Props) {
    return (
        <div key={recipe.id} className="col-sm-4">
            <img src={recipe.image} alt="recipe-img" className="img-fluid" />
            <h3 className="recipes__title">{recipe.title}</h3>
        </div>
    )
}