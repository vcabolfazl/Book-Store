import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function SingleSlider() {
 return (
  <>
   <Swiper
    spaceBetween={0}
    centeredSlides={true}
    loop={true}
    autoplay={{
     delay: 3500,
     disableOnInteraction: false,
    }}
    pagination={{
     dynamicBullets: true,
    }}
    modules={[Autoplay, Pagination]}
    className="mySwiper"
   >
    <SwiperSlide>
     <img className='rounded-xl mx-auto' src="/assets/Images/Banner/111.webp" alt="" />
    </SwiperSlide>

    <SwiperSlide>
     <img className='rounded-xl mx-auto' src="/assets/Images/Banner/222.webp" alt="" />

    </SwiperSlide>

    <SwiperSlide>
     <img className='rounded-xl mx-auto' src="/assets/Images/Banner/333.webp" alt="" />

    </SwiperSlide>
    <SwiperSlide>
     <img className='rounded-xl mx-auto' src="/assets/Images/Banner/444.webp" alt="" />

    </SwiperSlide>
   </Swiper>
  </>
 );
}
