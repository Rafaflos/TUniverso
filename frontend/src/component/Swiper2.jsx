import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';


const Swiper2 = () => {
    return (
        <div> <Swiper
            modules={[EffectCoverflow, Autoplay]}
            effect="coverflow"
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={50}
            slidesPerView={3}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,

            }}
        >
            <SwiperSlide><img src="/Img/Utcubamba.jpg" alt="Slide 5" style={{ marginTop:'100px', width: '200px', height: '200px' }} /></SwiperSlide>
            <SwiperSlide><img src="/Img/Utcubamba.jpg" alt="Slide 5" style={{ marginTop:'100px', width: '200px', height: '200px' }} /></SwiperSlide>
            <SwiperSlide><img src="/Img/Utcubamba.jpg" alt="Slide 5" style={{ marginTop:'100px', width: '200px', height: '200px' }} /></SwiperSlide>
            <SwiperSlide><img src="/Img/Utcubamba.jpg" alt="Slide 5" style={{ marginTop:'100px', width: '200px', height: '200px' }} /></SwiperSlide>
            <SwiperSlide><img src="/Img/Utcubamba.jpg" alt="Slide 5" style={{ marginTop:'100px', width: '200px', height: '200px' }} /></SwiperSlide>
            <SwiperSlide><img src="/Img/Utcubamba.jpg" alt="Slide 5" style={{ marginTop:'100px', width: '200px', height: '200px' }} /></SwiperSlide>


        </Swiper>
        </div>
    );
}
export default Swiper2;

