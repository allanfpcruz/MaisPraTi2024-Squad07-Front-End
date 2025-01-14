import "./TestimonialCard.css";

// eslint-disable-next-line react/prop-types
const TestimonialCard = ({ name, photo, rating, comment }) => {
  // Criar estrelas baseadas na avaliação
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <div className="testimonial-card">
      <div className="quote-icon">“</div> {/* Ícone de aspas */}
      <div className="photo-position">
        <img className="testimonial-photo" src={photo} alt={name} />
      </div>
      <div className="name-rating">
        <h3 className="testimonial-name">{name}</h3>
        <div className="testimonial-rating">
          {stars.map((isFilled, index) => (
            <span key={index} className={isFilled ? "star-filled" : "star-empty"}>★</span>
          ))}
          <span className="rating-value">({rating.toFixed(1)})</span>
        </div>
      </div>
      <p className="testimonial-comment">{comment}</p>
    </div>
  );
};

export default TestimonialCard;