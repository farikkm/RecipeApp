import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useFetchRecipeInfo from "../hooks/useFetchRecipeInfo";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import RecipeInfo from "../components/RecipeInfo";

export default function RecipePage() {
  const { id } = useParams();

  const { recipe, loading, error } = useFetchRecipeInfo(id);

  return (
    <div className="wrapper container">
      <Header />
      <main className="main">
        <h1>{recipe?.title}</h1>

        {loading && <LoadingSpinner />}
        {error && <p>Error: {error}</p>}

        {recipe ? (
          <RecipeInfo recipe={recipe} />
        ) : (
          !loading && <p>No data yet!</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
