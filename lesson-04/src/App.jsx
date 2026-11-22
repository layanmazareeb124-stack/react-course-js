import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MovieList from "./components/MovieList.jsx";
import { movies } from "./data/movies.js";

export default function App() {
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const topRated = movies.filter(movie => movie.rating >= 8.7);

  const genres = movies
    .map(movie => movie.genre)
    .filter((genre, index, all) => all.indexOf(genre) === index);

  console.log(genres);

  const shownMovies = onlyAvailable
    ? movies.filter(movie => movie.available)
    : movies;

  return (
    <>
      <Header />
      <main dir="rtl">
        <h1>הקטלוג</h1>

        <MovieList title="הכי מדורגים" movies={topRated} />

        <button
          type="button"
          aria-pressed={onlyAvailable}
          onClick={() => setOnlyAvailable(!onlyAvailable)}
        >
          רק זמינים לצפייה
        </button>

        <MovieList title="כל הסרטים" movies={shownMovies} />
      </main>
      <Footer />
    </>
  );
}