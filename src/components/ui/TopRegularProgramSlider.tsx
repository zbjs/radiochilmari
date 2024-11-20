'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const TopRegularProgramSlider = () => {
  return (
    <div className="relative">
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
            src="../../assets/images/top_regular_program/radiochilmari_উন্নয়ন সংবাদ.jpg"
            alt="Image 1"
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>
        
        {/* Slider 2 */}
        <SwiperSlide>
          <img
            src="../../assets/images/top_regular_program/radiochilmari_উন্নয়ন সংবাদ.jpg"
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
  );
};

export default TopRegularProgramSlider;


