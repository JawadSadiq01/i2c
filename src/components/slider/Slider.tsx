import React, { useState, useEffect } from "react";
import "./Slider.css";
import { Microsoft, Twitter ,CocaCola, ChevronRight, ChevronLeft } from "../../assets/images";

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [slidesPerView, setSlidesPerView] = useState<number>(1);

  const slides = [
    { src: Microsoft, alt: "Microsoft Logo" },
    { src: Twitter, alt: "Twitter Logo" },
    { src: CocaCola, alt: "Coca-Cola Logo" },
  ];

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1168) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 686) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + slidesPerView) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - slidesPerView + slides.length) % slides.length
    );
  };

  return (
    <section className="slider" aria-label="Image Slider">
      <button className="slideButton slideButtonLeft" onClick={prevSlide}>
      <img src={ChevronLeft} alt="Previous" />
      </button>
      <div
        className="slideTrack"
        style={{ transform: `translateX(-${(currentSlide / slidesPerView) * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index >= currentSlide && index < currentSlide + slidesPerView ? "slideActive" : ""}`}
            style={{ flex: `0 0 ${100 / slidesPerView}%` }}
          >
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
      <button className="slideButton slideButtonRight" onClick={nextSlide}>
      <img src={ChevronRight} alt="Next" />
      </button>
    </section>
  );
};

export default Slider;
