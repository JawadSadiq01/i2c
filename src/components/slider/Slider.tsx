import React, { useState, useEffect } from "react";
import "./Slider.css";
import { Microsoft, Twitter, CocaCola, ChevronRight, ChevronLeft, Logo } from "../../assets/images";

const Slider: React.FC = () => {
  const allSlides = [
    { src: Microsoft, alt: "Microsoft Logo" },
    { src: Twitter, alt: "Twitter Logo" },
    { src: CocaCola, alt: "Coca-Cola Logo" },
    { src: Logo, alt: "i2c Logo" },

  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [slidesPerView, setSlidesPerView] = useState<number>(1);
  const [visibleSlides, setVisibleSlides] = useState(allSlides.slice(0, slidesPerView));

  useEffect(() => {
    const updateSlidesPerView = () => {
      let perView = 1;
      if (window.innerWidth >= 1168) {
        perView = 3;
      } else if (window.innerWidth >= 686) {
        perView = 2;
      }
      setSlidesPerView(perView);
      setVisibleSlides(allSlides.slice(0, perView));
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  });

  useEffect(() => {
    const newVisibleSlides = [];
    for (let i = 0; i < slidesPerView; i++) {
      newVisibleSlides.push(allSlides[(currentSlide + i) % allSlides.length]);
    }
    setVisibleSlides(newVisibleSlides);
  }, [currentSlide, slidesPerView, allSlides]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % allSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + allSlides.length) % allSlides.length);
  };

  return (
    <section className="slider" aria-label="Image Slider">
      <button className="slideButton slideButtonLeft" onClick={prevSlide}>
        <img src={ChevronLeft} alt="Previous" />
      </button>
        <div className="slideTrack">
          {visibleSlides.map((slide, index) => (
            <div key={index} className="slide"  style={{ flex: `0 0 ${100 / slidesPerView}%` }}>
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
