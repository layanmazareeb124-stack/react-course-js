import MovieCard from "./MovieCard.jsx";
import "./MovieList.css";

export default function MovieList({ title, movies }) {
  return (
    <section className="movie-list">
      <h2>{title}</h2>

      {movies.length === 0 && (
        <p className="movie-list__empty">לא נמצאו סרטים</p>
      )}

      <div className="movie-list__grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
}