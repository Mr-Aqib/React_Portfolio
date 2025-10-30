import React, { useEffect, useState } from "react";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    if (autoPlay) {
      timeOut = setTimeout(() => {
        slideRight();
      }, 1500);
    }
    return () => clearTimeout(timeOut);
  }, [current, autoPlay]); // Added dependencies

  const slideRight = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const slideLeft = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel_card ${
              index === current ? "carousel_card-active" : ""
            }`}
          >
            <img
              className="card_image"
              src={image.image}
              alt={image.title || "carousel"}
            />
            <div className="card_overlay">
              <h2 className="card_title">{image.title}</h2>
            </div>
          </div>
        ))}

        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>

        <div className="carousel_pagination">
          {images.map((_, index) => (
            <div
              key={index}
              className={`pagination_dot ${
                index === current ? "pagination_dot-active" : ""
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
