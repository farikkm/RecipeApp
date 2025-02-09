import Header from "../components/Header";
import { useFetchRecipes } from "../hooks/useFetchRecipes";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Footer from "../components/Footer";
import RecipeItems from "../components/RecipeItems";

function Home() {
  const { recipes, loading, error } = useFetchRecipes()

  return (
    <div className="wrapper container">
      <Header />
      <main className="main">
        <h1>Hello, Recipe app</h1>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <p>Ошибка: {error}</p>
        ) : recipes.length > 0 ? (
          <RecipeItems recipes={recipes} />
        ) : (
          <p>No data yet!</p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
