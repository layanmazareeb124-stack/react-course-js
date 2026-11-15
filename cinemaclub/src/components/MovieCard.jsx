function MovieCard({ title, year, rating, genre, available, popular, duration }) {
  return (
    <article className="movie-card">
      <h2>{title}</h2>
      <p>שנת יציאה: {year}</p>
      <p>דירוג: {rating}</p>
      <p>ז׳אנר: {genre}</p>
      {typeof duration === "number" && <p>משך הסרט: {duration} דקות</p>}
      {available && <p>זמין לצפייה</p>}
      {popular && <p>בחירת הצוות</p>}
    </article>
  );
}

export default MovieCard;