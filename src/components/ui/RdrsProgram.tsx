"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RdrsProgramImages } from "@/contexts/RdrsProgram";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function RdrsProgram() {
  const settings = {
    dots: true, // Show dots for pagination
    infinite: true, // Infinite scroll
    speed: 500, // Transition speed
    slidesToShow: 1, // Default: Show 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Autoplay the carousel
    autoplaySpeed: 2500, // Autoplay speed (ms)
    arrows: true, // Show navigation arrows
    responsive: [
      {
        breakpoint: 1024, // For tablets and up (large screens)
        settings: {
          slidesToShow: 3, // Show 3 slides at a time
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // For tablets (medium screens)
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // For mobile (small screens)
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50">
      {/* Text Section */}
      <div className="container mx-auto p-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-purple-600 text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            নারীর অধিকার এবং নারী ও শিশু সম্পর্কিত প্রোগ্রাম
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            নারীর অধিকার এবং নারী ও শিশু সম্পর্কিত প্রোগ্রামগুলি সচেতনতা সৃষ্টি,
            তথ্য প্রদান এবং সমাজে ইতিবাচক পরিবর্তন আনার জন্য প্রচারিত হয়। এসব
            প্রোগ্রামে নারীদের আইনি অধিকার, গার্হস্থ্য সহিংসতা, শিশুদের শিক্ষা ও
            সুরক্ষা, স্বাস্থ্য সচেতনতা, এবং নারী উদ্যোক্তাদের সাফল্য তুলে ধরা হয়।
            এছাড়া, শিশু শ্রম, পাচার ও নির্যাতন রোধে সচেতনতা তৈরি করা হয়, যা নারী
            ও শিশুদের নিরাপত্তা এবং সমান অধিকার নিশ্চিত করতে সহায়ক।
          </p>
        </div>
      </div>

      {/* Slider Section */}
      <div className="slider-container w-full bg-white p-6">
        <div className="container mx-auto">
          <Slider {...settings}>
            {RdrsProgramImages.map(
              (
                image: string | StaticImport,
                index: React.Key | null | undefined
              ) => (
                <div key={index} className="px-2">
                  <Image
                    src={image}
                    alt={`Slide ${index}`}
                    width={1200}
                    height={600}
                    className="object-cover rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
}
