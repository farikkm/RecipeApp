import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useFetchRecipeInfo from "../hooks/useFetchRecipeInfo";

const IMG_API_URL = 'https://img.spoonacular.com/ingredients_100x100'

export default function RecipePage() {
  const { id } = useParams();

  const recipe = useFetchRecipeInfo(id);

  return (
    <div className="wrapper container">
      <Header />
      <main className="main">
        <h1>{recipe?.title}</h1>

        <div className="recipe">
          <div className="recipe__img">
            <img src={`${recipe?.image}`} alt="recipe-img" />
            <p className="recipe__summary" dangerouslySetInnerHTML={{ __html: recipe?.summary || "" }}></p>
            <span>Get be ready in <strong>{recipe?.readyInMinutes}</strong> minutes</span>
          </div>

          <div className="recipe__ingredients mt-4">
            <h4>Ingredients:</h4>

            <div className="recipe__ingredients_items row">
              {recipe?.extendedIngredients.map((ingredient, id) => (
                <div key={id} className="recipe__ingredients_item col-sm-3">
                  <div className="recipe__ingredients_item-img">
                    <img src={`${IMG_API_URL}/${ingredient.image}`} alt="ingredient-img" />
                    <span>{ingredient.name}</span>
                  </div>
                  <ul>
                    <li>Unit: {ingredient.unit}</li>
                    <li>Amount: {ingredient.amount}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 recipe__instructions">
            <h4>Instructions:</h4>
            <p dangerouslySetInnerHTML={{ __html: recipe?.instructions || "" }}></p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
