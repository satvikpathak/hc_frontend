import { useEffect, useState } from "react";
import p1 from "../../assets/Hero-Section/1.jpg";
import p2 from "../../assets/Hero-Section/2.png";
import p3 from "../../assets/Hero-Section/3.jpg";
import p4 from "../../assets/Hero-Section/4.png";
import p5 from "../../assets/Hero-Section/5.jpg";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideInterval = 4000;

  const carouselItems = [p1, p2, p3, p4, p5];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div
      id="controls-carousel"
      className="relative w-full z-10"
      data-carousel="static"
    >
      <div className="relative rounded-md h-48 md:h-96 lg:h-[540px] overflow-hidden">
        {carouselItems.map((src, index) => (
          <div
            className={`transition-opacity duration-700 ease-in-out ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            } absolute top-0 left-0 w-full h-full`}
            key={index}
          >
            <img
              src={src}
              className="absolute block w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-stone-800/30 group-hover:bg-white/50 dark:group-hover:bg-stone-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-stone-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-stone-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-stone-800/30 group-hover:bg-white/50 dark:group-hover:bg-stone-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-stone-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-stone-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
