import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/HomePage";
import Search from "./views/SearchPage";
import RecipePage from "./views/RecipePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/recipe/:id" element={<RecipePage />}/>
      </Routes>
    </Router>
  )
}