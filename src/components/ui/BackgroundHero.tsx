import React from "react";
import BackgroundHeroImages from "@/assets/images/radiochilmar_bg-logo.jpg";
import Image from "next/image";

const BackgroundHero = () => {
  return (
    <div className="relative mt-20 w-full">
      <Image
        src={BackgroundHeroImages}
        alt="Background Image"
        className="object-cover object-center w-full h-full"
      />

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">Hello, World!</h1>
        <p className="text-lg md:text-xl text-white mt-4">This is a text</p>
      </div> */}
    </div>
  );
};

export default BackgroundHero;
