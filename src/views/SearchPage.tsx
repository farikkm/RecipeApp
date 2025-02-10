import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { Recipe } from "../types";
import RecipeItems from "../components/RecipeItems";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const API_KEY = "17ca904bd1fe4b9caa14b70958ca3815";
const API_URL = "https://api.spoonacular.com/recipes/complexSearch";

export default function Search() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    const url = `${API_URL}?apiKey=${API_KEY}&query=${query}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.results) {
        setRecipes(data.results);
      } else {
        setRecipes([]);
      }
    } catch (err) {
      setError("Ошибка при загрузке рецептов");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper container">
      <Header />
      <main className="main">
        <h1>Search Page</h1>
        <nav className="navbar navbar-light bg-light">
          <form
            className="form-inline"
            onSubmit={handleSearch}
            style={{
              width: "100%",
              padding: "0 15px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="form-control"
              style={{
                width: "100%",
              }}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>

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
