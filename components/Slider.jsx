import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Pagination } from 'swiper/modules';
import ProductCard from './ProductCard';

export default function Slider({ sm }) {
 return (
  <>
   <Swiper
    style={{ padding: "15px", borderRadius: "15px" }}
    slidesPerView={sm}
    spaceBetween={10}
    breakpoints={{
     640: {
      slidesPerView: 2,
      spaceBetween: 10,
     },
     768: {
      slidesPerView: 3,
      spaceBetween: 20,
     },
     1024: {
      slidesPerView: 4,
      spaceBetween: 20,
     },
     1350: {
      slidesPerView: 5,
      spaceBetween: 20,
     },
    }}
    modules={[Pagination]}
    className="mySwiper"
   >
    <SwiperSlide>
     <ProductCard />
    </SwiperSlide>
    <SwiperSlide>
     <ProductCard />
    </SwiperSlide>
    <SwiperSlide>
     <ProductCard />
    </SwiperSlide>
    <SwiperSlide>
     <ProductCard />
    </SwiperSlide>
    <SwiperSlide>
     <ProductCard />
    </SwiperSlide>
    <SwiperSlide>
     <ProductCard />
    </SwiperSlide>
    <SwiperSlide>
     <ProductCard />
    </SwiperSlide>
    <SwiperSlide>
     <ProductCard />
    </SwiperSlide>

   </Swiper>
  </>
 );
}
