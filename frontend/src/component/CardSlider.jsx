import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Estilos/SliderCard.css";

const cardsData = [
  {
    title: "Card 1",
    description: "Description for card 1",
    image: "./Img/juanji.jpg",
  },
  {
    title: "Card 2",
    description: "Description for card 2",
    image: "./Img/jaen4_0.jpg",
  },
  {
    title: "Card 3",
    description: "Description for card 3",
    image: "./Img/saposoa.jpg",
  },
  {
    title: "Card 4",
    description: "Description for card 4",
    image: "./Img/tarapoto.jpg",
  },
  {
    title: "Card 5",
    description: "Description for card 5",
    image: "./Img/trujillo.jpg",
  },
  {
    title: "Card 4",
    description: "Description for card 4",
    image: "./Img/tocache.jpg",
  },
  {
    title: "Card 5",
    description: "Description for card 5",
    image: "./Img/yurimaguas.jpg",
  },
];

const CardSlider = () => {
  return (
    <>
      <div className="title">
        <h2>Nuestros destino</h2>
      </div>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="card-body">
              <img src={card.image} alt={card.title} />
              <div className="card-text">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardSlider;
