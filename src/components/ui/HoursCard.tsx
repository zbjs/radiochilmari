'use client';
import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/bn"; // Import Bangla locale
import { motion } from 'framer-motion'; // Import framer-motion

moment.locale("bn"); // Set moment to Bangla locale

// Function to convert English numbers to Bangla
const toBanglaNumber = (number: string): string => {
  const englishToBanglaMap: { [key: string]: string } = {
    "0": "০",
    "1": "১",
    "2": "২",
    "3": "৩",
    "4": "৪",
    "5": "৫",
    "6": "৬",
    "7": "৭",
    "8": "৮",
    "9": "৯",
  };
  return number.replace(/[0-9]/g, (digit) => englishToBanglaMap[digit]);
};

const HoursCard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      // Format current time in 12-hour format with AM/PM and adjust to Bangladesh timezone
      setCurrentTime(
        toBanglaNumber(
          moment().utcOffset("+06:00").format("dddd, LL, h:mm:ss A")
        )
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup
  }, []);

  const hours = [
    { day: "সোমবার", time: toBanglaNumber("২:৪৫ PM - ৮:০৫ PM") },
    { day: "মঙ্গলবার", time: toBanglaNumber("২:৪৫ PM - ৮:০৫ PM") },
    { day: "বুধবার", time: toBanglaNumber("২:৪৫ PM - ৮:০৫ PM") },
    { day: "বৃহস্পতিবার", time: toBanglaNumber("২:৪৫ PM - ৮:০৫ PM") },
    { day: "শুক্রবার", time: toBanglaNumber("২:৪৫ PM - ৮:০৫ PM") },
    { day: "শনিবার", time: toBanglaNumber("২:৪৫ PM - ৮:০৫ PM") },
    { day: "রবিবার", time: toBanglaNumber("২:৪৫ PM - ৮:০৫ PM") },
  ];

  // Assign a background color to each day
  const dayColors = [
    "bg-blue-100", "bg-green-100", "bg-yellow-100", 
    "bg-red-100", "bg-purple-100", "bg-pink-100", "bg-indigo-100"
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-screen-lg bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
          অনুষ্ঠানের সময়সূচি
        </h2>
        <div className="text-center text-gray-500 mb-4">
          <p>বর্তমান সময়:</p>
          <p className="text-lg font-medium text-gray-800">{currentTime}</p>
        </div>
        <ul className="divide-y divide-gray-200">
          {hours.map((hour, index) => (
            <motion.li
              key={index}
              className={`flex justify-between items-center p-4 text-gray-700 ${dayColors[index]} hover:bg-gray-200 rounded-lg`}
              whileHover={{ scale: 1.05 }} // Animation on hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="font-medium ">{hour.day}</span>
              <span className="font-medium" >{hour.time}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HoursCard;
