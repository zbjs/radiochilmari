"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AwardImages } from "@/contexts/Award99.2";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Type for image import
type AwardImage = StaticImport; 

// React component
const Award: React.FC = () => {
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className="award-carousel-container">
      <Slider {...settings}>
        {AwardImages.map((image, index) => (
          <div key={index} className="award-slide">
            <Image
              src={image as AwardImage} // Type assertion to StaticImport
              alt={`Award ${index + 1}`}
              width={500} // Customize the width as needed
              height={300} // Customize the height as needed
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Award;
