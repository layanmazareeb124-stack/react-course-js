import { useState } from "react";

export default function MovieCard({ title, year, genre, rating, available }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="movie-card">
      <h3>{title} ({year})</h3>
      <p>{genre} · {rating}</p>
      <p>{available ? "זמין לצפייה" : "לא זמין לצפייה"}</p>
      <button
        type="button"
        aria-label={`מועדף: ${title}`}
        aria-pressed={liked}
        onClick={() => setLiked(!liked)}
      >
        {liked ? "♥" : "♡"}
      </button>
    </article>
  );
}