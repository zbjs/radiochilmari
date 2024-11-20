'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import imageUrls from '@/contexts/TopRegularProgramSliderData';

const TopRegularProgramSlider = () => {


  const [bgColor, setBgColor] = useState('bg-white');
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleBgColorChange = () => {
    const colors = ['bg-white', 'bg-gray-100', 'bg-blue-50', 'bg-yellow-50'];
    const nextColor = colors[(colors.indexOf(bgColor) + 1) % colors.length];
    setBgColor(nextColor);
  };

  return (
    <div className={`relative ${bgColor}`}>
      <div className="absolute  flex items-center space-x-4">
        <button onClick={handleBgColorChange}>Change Color</button>
        <div>Current Slide: {currentSlide}</div>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
      >
        {imageUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <img
              src={url}
              alt={`Image ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
          
        ))}
        
      </Swiper>
    
    </div>
  );
};

export default TopRegularProgramSlider;
