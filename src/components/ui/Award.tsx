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
  // Slick carousel settings
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function(index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
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
