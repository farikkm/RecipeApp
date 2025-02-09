import Header from "../components/Header";
import { useFetchRecipes } from "../hooks/useFetchRecipes";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Footer from "../components/Footer";
import RecipeItems from "../components/RecipeItems";
import { useState } from "react";
import FilterPanel from "../components/FilterPanel";

function Home() {
  const [filters, setFilters] = useState<Record<string, boolean>>({})

  const applyFilters = (newFilters: Record<string, boolean>) => {
    setFilters(newFilters)
    fetchRecipes()
  }

  const { recipes, loading, error, fetchRecipes } = useFetchRecipes(filters)

  return (
    <div className="wrapper container">
      <Header />
      <main className="main">
        <h1>All Recipes</h1>

        <div className="recipes-filter mt-3">
          <FilterPanel onApplyFilters={applyFilters} />
        </div>

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
