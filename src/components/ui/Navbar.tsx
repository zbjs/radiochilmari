import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full flex items-center justify-between h-16 px-4 bg-gray-800 text-white shadow-md z-50">
      {/* Centered Logo */}
      <div className="flex-1 flex justify-center">
       <Link href="/">
       <Image
          src="/android-chrome-192x192.png"
          alt="Logo"
          width={50}
          height={50}
          className="object-contain"
        />
       </Link>
      </div>

      {/* Right Side Links */}
      <div className="flex space-x-6">
        <Link href="/about-us" className="hover:underline">
        আমাদের সম্পর্কে
        </Link>
        <Link href="/our-show" className="hover:underline">
        আমাদের শো
        </Link>
        <Link href="/contact-us" className="hover:underline">
        যোগাযোগ করুন
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
