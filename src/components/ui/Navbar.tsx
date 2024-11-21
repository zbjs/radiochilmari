"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import readioIcon from "@/assets/icons/readio_icon.png"

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  // Detect scrolling and apply blur effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={`fixed top-0 w-full flex items-center justify-between h-16 px-4 bg-gray-200 text-white shadow-md z-50 ${
        scrolling ? "bg-opacity-80 backdrop-blur-md" : "bg-opacity-100"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Centered Logo */}
      <div className="flex-1 flex justify-center">
        <Link href="/">
          <Image
            src={readioIcon}
            alt="readioIcon"
            width={50}
            height={50}
            className="cursor-pointer rounded-full"
          />
        </Link>
      </div>

      {/* Right Side Links */}
      <div className="flex space-x-6 text-black font-bold font-bengali text-sm md:text-xl lg-text-2xl">
        <motion.div
          className="hover:underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Link href="/about-us">আমাদের সম্পর্কে</Link>
        </motion.div>
        <motion.div
          className="hover:underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Link href="/our-show">আমাদের অনুষ্ঠান সমূহ</Link>
        </motion.div>
        <motion.div
          className="hover:underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <Link href="/contact-us">যোগাযোগ করুন</Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
