import React from "react";
import Image from "next/image";
import BackgroundHeroImages from "@/assets/images/radiochilmar_bg-logo.jpg";

const BackgroundHero = () => {
  return (
    <div className="relative mt-20">
      {/* Background Image */}
      <Image
        src={BackgroundHeroImages}
        alt="Radio Chilmari Background"
        className="object-cover"
        priority
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Optional Content */}
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to Radio Chilmari</h1>
        <p className="mt-4 text-lg md:text-xl">Connecting hearts through radio</p>
      </div> */}
    </div>
  );
};

export default BackgroundHero;
