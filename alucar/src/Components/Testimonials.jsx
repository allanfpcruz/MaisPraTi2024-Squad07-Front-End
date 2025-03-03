import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
import "swiper/css";
import "swiper/css/pagination";
import "./Components_styles/Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = [
        {
          id: 1,
          name: "Renan Pires",
          photo: "./src/assets/1h.png",
          rating: 5,
          comment: "Plataforma incrivel, sem burocracia e confiavel.",
        },
        {
          id: 2,
          name: "Marisa Gonçalves",
          photo: "./src/assets/1m.png",
          rating: 4,
          comment: "Consegui alugar um bom veiculo para trabalhar na Uber graças ao site. Recomendo!",
        },
        {
          id: 3,
          name: "Carlos Silva",
          photo: "https://via.placeholder.com/100",
          rating: 5,
          comment: "Achei pratico e eficiente, os usuários que tive contato foram bem educados!",
        },
        {
          id: 4,
          name: "Ana Paula",
          photo: "https://via.placeholder.com/100",
          rating: 4,
          comment: "Os carros tem a placa consultada, isso passa uma segurança para quem tiver interesse.",
        }
      ];
      setTestimonials(data);
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="testimonials-section">
      <h2 className="testimonials-title">O QUE DIZEM SOBRE NÓS</h2>
      <p className="testimonials-subtitle">
        Confira as opiniões e avaliações de quem já utilizou a nossa plataforma
      </p>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={2} // Dois slides por vez
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="testimonials-swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard
              name={testimonial.name}
              photo={testimonial.photo}
              rating={testimonial.rating}
              comment={testimonial.comment}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
