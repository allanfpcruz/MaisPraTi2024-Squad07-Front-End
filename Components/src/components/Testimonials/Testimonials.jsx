import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = [
        {
          id: 1,
          name: "Renan Pires",
          photo: "https://s3-alpha-sig.figma.com/img/61a2/9db6/58ce0ba97ae2e1d1524ae872bf751ab4?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H-Ug6VD0PyxidGDtDj-~k1dHv2g2bUhy4DMHwuDmb8esLSPLsEGD4Junn7~50S2gX1AO06dPnrBkUVy5b~-zURuWdICpsQ6i5pJDnI-gv67i3f5QExUwp7YRY9tlzzPpJmZ6DMslsQ-U4qxcr~lAGmy245Wc8DX-9ZtzMdlAa6xxflIxSGoSR3uoDXN9k3iidBnYTHqC3w7xQXfuOmnWEVDpgblL-VPBcWDa70gcj7e-~yP2zS0cIyTbYb2frAg82ubTYGULSR2ivgIKcHklMWOwUEy4MHJ3boOAV9yt-hWnCTHhbeK4dMLY0EhReveYnY2OCeDM1C2~GrZyjHsQ4Q__",
          rating: 5,
          comment: "Plataforma incrivel, sem burocracia e confiavel.",
        },
        {
          id: 2,
          name: "Marisa Gonçalves",
          photo: "https://s3-alpha-sig.figma.com/img/7d3b/afe1/65e94c08b5152c326d752a4bb04854e2?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pyS2pYG5zt6Ia13InOujHGLg63XabG8RsxevFieKCGzZ1aHCc52rblepu~C1AGUcEzWExdkFXSMBmcJeI8nhzB-5Y0NVyCcSfiU94SmHde4-Fylte1NsPkatTQ7iJWsu6EtBwcQkNCzAW30O9fTG7UfJ9wnHwiCbnZkn0M550XhCproqh5MZ~dE8Frc~YEJ6hK8~8z8LAvSkewrhF6ntX915WVSjUjz2k2eZ3g0OrXbAdoOLdRRlj1fKyYrlB4~r3wDpO5nv6MSXPqI2LLUNBBccdOxIA814jSzPahOhVJl7MYLDTdWO5G6P-AwEvtlptqyvG-sCWZxZTG2cqjnkZg__",
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
