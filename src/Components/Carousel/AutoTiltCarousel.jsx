import React from "react";
import Slider from "react-slick";
import Tilt from "react-parallax-tilt";
import "../Carousel/Carousel.css";
const images = ["./img1.jpg", "./img1.jpg", "./img1.jpg"];

const AutoTiltCarousel = () => {
  const settings = {
    dots: true, // minimal dots
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // arrows remove kiye
    pauseOnHover: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <Tilt
            key={index}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.03}
            transitionSpeed={250}
          >
            <img src={img} alt={`Slide ${index}`} className="carousel-image" />
          </Tilt>
        ))}
      </Slider>
    </div>
  );
};

export default AutoTiltCarousel;
