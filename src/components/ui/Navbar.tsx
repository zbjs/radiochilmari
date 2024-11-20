import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-16 px-4 bg-gray-800 text-white">
      {/* Centered Logo */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/android-chrome-192x192.png"
          alt="Logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>

      {/* Right Side Links */}
      <div className="flex space-x-6">
        <a href="#about-us" className="hover:underline">
          About Us
        </a>
        <a href="#our-show" className="hover:underline">
          Our Show
        </a>
        <a href="#contact-us" className="hover:underline">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
