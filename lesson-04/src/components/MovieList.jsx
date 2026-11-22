import MovieCard from "./MovieCard.jsx";
import "./MovieList.css";

export default function MovieList({
  title,
  movies,
  personalRatings,
  onRateMovie,
}) {
  return (
    <section className="movie-list">
      <h2>{title}</h2>

      {movies.length === 0 && (
        <p className="movie-list__empty">לא נמצאו סרטים</p>
      )}

      <div className="movie-list__grid">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            {...movie}
            personalRating={personalRatings[movie.id] ?? 0}
            onRate={star => onRateMovie(movie.id, star)}
          />
        ))}
      </div>
    </section>
  );
}