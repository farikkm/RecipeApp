import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import RecipeItems from "../components/RecipeItems";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import useFetchSearchRecipes from "../hooks/useFetchSearchRecipes";
import SearchPanel from "../components/SearchPanel";

export default function Search() {
  const [query, setQuery] = useState("");

  const { recipes, loading, error, searchRecipe } = useFetchSearchRecipes()

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    searchRecipe(query);
  };

  return (
    <div className="wrapper container">
      <Header />
      <main className="main">
        <h1>Search Page</h1>
        
        <SearchPanel query={query} setQuery={setQuery} handleSearch={handleSearch} />

        {loading && <LoadingSpinner />}
        {error && <p>{error}</p>}

        {recipes.length > 0 ? (
          <RecipeItems recipes={recipes} />
        ) : (
            !loading && <p>No recipes found!</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
