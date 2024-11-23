'use client'
import React from "react";
import { aboutUsData } from "@/contexts/aboutUsData";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBroadcastTower, FaUsers } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

const AboutUs: React.FC = () => {
  const {
    title,
    address,
    contact,
    broadcast,
    description,
    audienceAndCoverage,
  } = aboutUsData;

  return (
    <div className="font-sans py-8 mt-20 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-purple-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Address Card */}
          <motion.div
            className="bg-gradient-to-r from-blue-300 to-pink-300 duration-400 group-hover:opacity-100 group-hover:duration-200 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 w-full"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-700 flex items-center">
              <FaMapMarkerAlt className="text-blue-500 mr-2" /> ঠিকানা
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              {address.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            className="bg-gradient-to-l from-blue-300 to-pink-300 duration-400 group-hover:opacity-100 group-hover:duration-200 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 w-full"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-700 flex items-center">
              <FaPhoneAlt className="text-green-500 mr-2" /> যোগাযোগ
            </h2>
            <p className="text-gray-600">ফোন:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              {contact.phone.map((phone, index) => (
                <li key={index}>{phone}</li>
              ))}
            </ul>
            <p className="mt-2 text-gray-600 flex items-center">
              <FaEnvelope className="text-red-500 mr-2" /> ইমেইল: {contact.email}
            </p>
            
          </motion.div>

          {/* Broadcast Card */}
          <motion.div
            className="bg-gradient-to-r from-blue-300 to-pink-300 duration-400 group-hover:opacity-100 group-hover:duration-200 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 w-full"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-700 flex items-center">
              <FaBroadcastTower className="text-purple-500 mr-2" /> সম্প্রচার
            </h2>
            <p className="text-gray-600">ফ্রিকোয়েন্সি: {broadcast.frequency}</p>
            <p className="text-gray-600">
              পরীক্ষামূলক সম্প্রচার: {broadcast.yearStarted.test}
            </p>
            <p className="text-gray-600">
              আনুষ্ঠানিক সম্প্রচার: {broadcast.yearStarted.official}
            </p>
            <p className="text-gray-600">দেশ: {broadcast.country}</p>
            <p className="text-gray-600">মালিকানা: {broadcast.ownership}</p>
            <p className="text-gray-600">মালিক: {broadcast.owner}</p>
          </motion.div>

          {/* Description Card */}
          <motion.div
            className="bg-gradient-to-l from-blue-300 to-pink-300 duration-400 group-hover:opacity-100 group-hover:duration-200 shadow-md rounded-lg p-6 md:col-span-2 hover:shadow-lg transition-shadow duration-300 w-full"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              বিবরণ
            </h2>
            <p className="text-gray-600 font-medium">{description}</p>
          </motion.div>

          {/* Audience and Coverage Card */}
          <motion.div
            className="bg-gradient-to-r from-blue-300 to-pink-300 duration-400 group-hover:opacity-100 group-hover:duration-200 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 w-full"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-700 flex items-center">
              <FaUsers className="text-pink-500 mr-2" /> শ্রোতা এবং কভারেজ
            </h2>
            <h3 className="text-lg font-medium text-gray-700 flex items-center">
              <FaUsers className="text-indigo-500 mr-2" /> শ্রোতা:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              {audienceAndCoverage.audience.map((audience, index) => (
                <li key={index}>{audience}</li>
              ))}
            </ul>
            <p className="mt-4 text-gray-600 flex items-center">
              <MdLanguage className="text-green-500 mr-2" /> ভাষা:{" "}
              {audienceAndCoverage.languages}
            </p>
            <h3 className="mt-4 text-lg font-medium text-gray-700">
              কভারেজ এলাকা:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              {audienceAndCoverage.coverage.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
            <p className="mt-4 text-gray-600">
              বিষয়বস্তু: {audienceAndCoverage.contentType}
            </p>
            <p className="text-gray-600">
              কভারেজ ধরন: {audienceAndCoverage.coverageType}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
