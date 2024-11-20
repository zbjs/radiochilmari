'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const TopRegularProgramSlider = () => {
  return (
    <div className="relative">
     <div>
     <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {/* Slider 1 */}
        <SwiperSlide>
          <img
            src="https://github.com/zbjs/radiochilmari/blob/dev/src/assets/images/top_regular_program/radiochilmari_%E0%A6%89%E0%A6%A8%E0%A7%8D%E0%A6%A8%E0%A7%9F%E0%A6%A8%20%E0%A6%B8%E0%A6%82%E0%A6%AC%E0%A6%BE%E0%A6%A6.jpg?raw=true"
            alt="Image 1"
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>
        
        {/* Slider 2 */}
        <SwiperSlide>
          <img
            src="https://github.com/zbjs/radiochilmari/blob/dev/src/assets/images/top_regular_program/radiochilmari_%E0%A6%95%E0%A6%AC%E0%A6%BF%E0%A6%B0%20%E0%A6%B9%E0%A6%BE%E0%A6%9F.jpg?raw=true"
            alt="Image 2"
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>

        {/* Slider 3 */}
        <SwiperSlide>
          <img
            src="/images/slide3.jpg"
            alt="Image 3"
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>
      </Swiper>
     </div>
    </div>
  );
};

export default TopRegularProgramSlider;


