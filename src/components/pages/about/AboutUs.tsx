'use client'
import React from "react";
import { aboutUsData } from "@/contexts/aboutUsData";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutUs: React.FC = () => {
  const { title, address, contact, broadcast, description, audienceAndCoverage } = aboutUsData;

  return (
    <div className="flex mt-14 flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
        <motion.h1
          className="text-3xl font-bold text-blue-600 text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.h1>

        {/* Address Section */}
        <div className="mb-6">
          <motion.h2
            className="text-xl font-semibold text-red-500 mb-2"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            ঠিকানা:
          </motion.h2>
          {address.map((line, index) => (
            <p key={index} className="text-gray-700">{line}</p>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mb-6">
          <motion.h2
            className="text-xl font-semibold text-red-500 mb-2"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            যোগাযোগ:
          </motion.h2>
          <p><strong className="text-purple-500">ফোন:</strong> {contact.phone.join(", ")}</p>
          <p>
            <strong className="text-purple-500">ইমেল:</strong>{" "}
            <Link href={`mailto:${contact.email}`} className="text-blue-600 underline hover:text-blue-800">
              {contact.email}
            </Link>
          </p>
          <p>
            <strong className="text-purple-500">ফেসবুক:</strong>{" "}
            <Link href="https://www.facebook.com/radiochilmari" className="text-blue-600 underline hover:text-blue-800">
              {contact.facebook}
            </Link>
          </p>
        </div>

        {/* Broadcast Details */}
        <div className="mb-6">
          <motion.h2
            className="text-xl font-semibold text-red-500 mb-2"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            সম্প্রচার বিবরণ:
          </motion.h2>
          <p><strong className="text-purple-500">ফ্রিকোয়েন্সি:</strong> {broadcast.frequency}</p>
          <p>
            <strong className="text-purple-500">শুরুর বছর:</strong> পরীক্ষামূলক: {broadcast.yearStarted.test}, 
            আনুষ্ঠানিক: {broadcast.yearStarted.official}
          </p>
          <p><strong className="text-purple-500">দেশ:</strong> {broadcast.country}</p>
          <p><strong className="text-purple-500">মালিকানা:</strong> {broadcast.ownership}</p>
          <p><strong className="text-purple-500">মালিক:</strong> {broadcast.owner}</p>
        </div>

        {/* Description Section */}
        <div className="mb-6">
          <motion.h2
            className="text-xl font-semibold text-red-500 mb-2"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            বিবরণ:
          </motion.h2>
          <p>{description}</p>
        </div>

        {/* Audience & Coverage */}
        <div>
          <motion.h2
            className="text-xl font-semibold text-red-500 mb-2"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            শ্রোতা ও কভারেজ:
          </motion.h2>
          <p><strong className="text-purple-500">শ্রোতার ধরন:</strong> {audienceAndCoverage.audience.join(", ")}</p>
          <p><strong className="text-purple-500">ভাষা:</strong> {audienceAndCoverage.languages}</p>
          <p>
            <strong className="text-purple-500">কভারেজ এলাকাসমূহ:</strong>{" "}
            {audienceAndCoverage.coverage.join(", ")}
          </p>
          <p><strong className="text-purple-500">বিষয়বস্তু:</strong> {audienceAndCoverage.contentType}</p>
          <p><strong className="text-purple-500">কভারেজ ধরণ:</strong> {audienceAndCoverage.coverageType}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

