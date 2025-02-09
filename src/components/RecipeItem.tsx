import { Recipe } from "../types";

interface Props {
    recipe: Recipe
}

export default function RecipeItem({ recipe }: Props) {
    return (
        <div key={recipe.id} className="recipes__item col-sm-3">
            <div className="recipes__img">
                <img src={recipe.image} alt="recipe-img" className="img-fluid" />
            </div>
            <h3 className="recipes__title">{recipe.title}</h3>
        </div>
    )
}