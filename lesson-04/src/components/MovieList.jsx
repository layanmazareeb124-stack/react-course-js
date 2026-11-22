import MovieCard from "./MovieCard.jsx";
import "./MovieList.css";
export default function MovieList({ title, movies }) {
  return (
    <section>
      <h2>{title}</h2>
      {movies.length === 0 && (
  <p className="movie-list__empty">לא נמצאו סרטים</p>
)}
      <div className="movie-list__grid">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
            genre={movie.genre}
            rating={movie.rating}
            available={movie.available}
          />
        ))}
      </div>
    </section>
  );
}