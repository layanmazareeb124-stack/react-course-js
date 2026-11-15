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
        duration={148}
        available={true}
        popular={true}
        
      />

      <MovieCard
        title="Toy Story"
        year={1995}
        rating={8.3}
        genre="Animation"
        duration={81}
        available={false}
        popular={false}
      />

      <MovieCard
        title="Parasite"
        year={2019}
        rating={8.5}
        genre="Drama"
        duration={132}
        available={true}
        popular={false}
      />
    </section>
  );
}

export default MovieList;