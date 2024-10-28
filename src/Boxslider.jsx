import React, { useEffect, useState } from "react";

const images = [
  "https://cdn.bio.link/landing/feature/extras/speed.png",
  "https://cdn.bio.link/landing/feature/extras/qr-code.png",
  "https://cdn.bio.link/landing/feature/extras/unlimited-visitors.png",
  "https://cdn.bio.link/landing/feature/extras/seo-optimized.png",
  "https://cdn.bio.link/landing/feature/extras/qr-code.png",
  "https://cdn.bio.link/landing/feature/extras/speed.png",
];

function BoxSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="slider-container h-80 w-full overflow-hidden relative">
      <div
        className="slider-inner flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className=" w-[70%] h-full items-center flex-shrink-0">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className=" object-cover" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BoxSlider;
