import { useState } from "react";
import "./MovieCard.css";

const stars = [1, 2, 3, 4, 5];

export default function MovieCard({
  title,
  year,
  genre,
  rating,
  available,
  personalRating,
  onRate,
}) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="movie-card">
      <h3>{title} ({year})</h3>
      <p>{genre} · {rating}</p>

      <div className="movie-card__rating">
        <span>הדירוג שלי:</span>
        <div className="movie-card__stars" dir="ltr">
          {stars.map(star => (
            <button
              key={star}
              type="button"
              className="movie-card__star"
              aria-label={`דירוג ${star} מתוך 5`}
              aria-pressed={personalRating === star}
              onClick={() => onRate(star)}
            >
              {star <= personalRating ? "★" : "☆"}
            </button>
          ))}
        </div>
      </div>

      <p>{available ? "זמין לצפייה" : "לא זמין לצפייה"}</p>

      <button
        type="button"
        aria-label={`מועדף: ${title}`}
        aria-pressed={liked}
        onClick={() => setLiked(previous => !previous)}
      >
        {liked ? "♥" : "♡"}
      </button>
    </article>
  );
}