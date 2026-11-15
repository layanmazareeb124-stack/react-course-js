import MovieCard from "./MovieCard.jsx";

function MovieList() {
  return (
    <section>
      <h2>הסרטים שלנו</h2>

      <MovieCard
        title="Inception"
        year={2010}
        rating={8.8}
        genre="Sci-Fi"
        available={true}
        popular={true}
      />

      <MovieCard
        title="Toy Story"
        year={1995}
        rating={8.3}
        genre="Animation"
        available={false}
        popular={false}
      />

      <MovieCard
        title="Parasite"
        year={2019}
        rating={8.5}
        genre="Drama"
        available={true}
        popular={false}
      />
    </section>
  );
}

export default MovieList;