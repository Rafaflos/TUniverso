
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import {Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Estilos/SliderCard.css';



const cardsData = [
    { title: "Card 1", description: "Description for card 1", image: "./Img/cargas.png" },
    { title: "Card 2", description: "Description for card 2", image: "./Img/cargas.png" },
    { title: "Card 3", description: "Description for card 3", image: "./Img/cargas.png" },
    { title: "Card 4", description: "Description for card 4", image: "./Img/cargas.png" },
    { title: "Card 5", description: "Description for card 5", image: "./Img/cargas.png" },

    { title: "Card 4", description: "Description for card 4", image: "./Img/cargas.png" },
    { title: "Card 5", description: "Description for card 5", image: "./Img/cargas.png" }

];

const CardSlider = () => {
    return (
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
    );
}

export default CardSlider;
