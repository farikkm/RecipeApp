import Header from "../components/Header";
import { Recipe } from "../types";
import { useFetchRecipes } from "../hooks/useFetchRecipes";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Footer from "../components/Footer";

function Home() {
  const { randomRecipes, loading, error } = useFetchRecipes()

  return (
    <div className="wrapper container">
      <Header />
      <main className="main">
        <h1>Hello, Recipe app</h1>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <p>Ошибка: {error}</p>
        ) : randomRecipes.length > 0 ? (
          <div className="row">
            {randomRecipes.map((recipe: Recipe) => (
              <div key={recipe.id} className="col-sm-4">
                <img src={recipe.image} alt="recipe-img" className="img-fluid" />
                <h3 className="recipes__title">{recipe.title}</h3>
              </div>
            ))}
          </div>
        ) : (
          <p>No data yet!</p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
