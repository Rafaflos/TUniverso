import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


const MiSwiper = () => {
    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
        >
            <SwiperSlide><img src="/Img/cargas.png" alt="Slide 1" style={{ width: '100%', height: '500px' }} /> </SwiperSlide>
            <SwiperSlide><img src="/Img/cargas.png" alt="Slide 1" style={{ width: '100%', height: '500px' }} /> </SwiperSlide>
            <SwiperSlide><img src="/Img/cargas.png" alt="Slide 1" style={{ width: '100%', height: '500px' }} /> </SwiperSlide>
            <SwiperSlide><img src="/Img/cargas.png" alt="Slide 1" style={{ width: '100%', height: '500px' }} /> </SwiperSlide>

        </Swiper>
    );
}

export default MiSwiper