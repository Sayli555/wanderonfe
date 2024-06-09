import React, { useState } from 'react';

const ExperienceVideo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { src: "https://images.wanderon.in/new-homepage-data/Gallery/vietnam%202", alt: "Slide 1" },
    { src: "https://images.wanderon.in/new-homepage-data/Gallery/dubai%20re%2001?updatedAt=1711452484035", alt: "Slide 2" },
    { src: "https://images.wanderon.in/new-homepage-data/Gallery/kerala-trips-1", alt: "Slide 3" },
    { src: "https://images.wanderon.in/new-homepage-data/Gallery/meghalaya%201?updatedAt=1711451040355", alt: "Slide 4" },
    { src: "https://images.wanderon.in/new-homepage-data/Gallery/sikkim-trips-5?updatedAt=1711451159482", alt: "Slide 5" }
  ];

  const showSlide = (index) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
  };

  return (
    <div className="relative w-full h-96 " data-carousel="slide">
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute w-full h-full transition-transform duration-700 ease-in-out ${currentIndex === index ? 'translate-x-0' : 'translate-x-full'}`} data-carousel-item>
            <img src={slide.src} className="block w-full h-full object-cover" alt={slide.alt} />
          </div>
        ))}
      </div>
      <div className="absolute z-30 w-full flex justify-center bottom-5 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-300'}`}
            aria-current={currentIndex === index}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => showSlide(index)}
          ></button>
        ))}
      </div>
      <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={handlePrev}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={handleNext}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default ExperienceVideo;
