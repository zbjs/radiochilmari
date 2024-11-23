// "use client";
// import React from "react";
// import { aboutUsData } from "@/contexts/aboutUsData";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const AboutUs: React.FC = () => {
//   const {
//     title,
//     address,
//     contact,
//     broadcast,
//     description,
//     audienceAndCoverage,
//   } = aboutUsData;

//   return (
//     <div className="flex mt-14 flex-col items-center justify-center min-h-screen p-4">
//       <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
//         <motion.h1
//           className="text-3xl font-bold text-blue-600 text-center mb-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           {title}
//         </motion.h1>

//         {/* Address Section */}
//         <div className="mb-6">
//           <motion.h2
//             className="text-xl font-semibold text-red-500 mb-2"
//             initial={{ x: -200 }}
//             animate={{ x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             ঠিকানা:
//           </motion.h2>
//           {address.map((line, index) => (
//             <p key={index} className="text-gray-700">
//               {line}
//             </p>
//           ))}
//         </div>

//         {/* Contact Section */}
//         <div className="mb-6">
//           <motion.h2
//             className="text-xl font-semibold text-red-500 mb-2"
//             initial={{ x: -200 }}
//             animate={{ x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             যোগাযোগ:
//           </motion.h2>
//           <p>
//             <strong className="text-purple-500">ফোন:</strong>{" "}
//             {contact.phone.join(", ")}
//           </p>
//           <p>
//             <strong className="text-purple-500">ইমেল:</strong>{" "}
//             <Link
//               href={`mailto:${contact.email}`}
//               className="text-blue-600 underline hover:text-blue-800"
//             >
//               {contact.email}
//             </Link>
//           </p>
//           <p>
//             <strong className="text-purple-500">ফেসবুক:</strong>{" "}
//             <Link
//               href="https://www.facebook.com/radiochilmari"
//               className="text-blue-600 underline hover:text-blue-800"
//             >
//               {contact.facebook}
//             </Link>
//           </p>
//         </div>

//         {/* Broadcast Details */}
//         <div className="mb-6">
//           <motion.h2
//             className="text-xl font-semibold text-red-500 mb-2"
//             initial={{ x: -200 }}
//             animate={{ x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             সম্প্রচার বিবরণ:
//           </motion.h2>
//           <p>
//             <strong className="text-purple-500">ফ্রিকোয়েন্সি:</strong>{" "}
//             {broadcast.frequency}
//           </p>
//           <p>
//             <strong className="text-purple-500">শুরুর বছর:</strong> পরীক্ষামূলক:{" "}
//             {broadcast.yearStarted.test}, আনুষ্ঠানিক:{" "}
//             {broadcast.yearStarted.official}
//           </p>
//           <p>
//             <strong className="text-purple-500">দেশ:</strong>{" "}
//             {broadcast.country}
//           </p>
//           <p>
//             <strong className="text-purple-500">মালিকানা:</strong>{" "}
//             {broadcast.ownership}
//           </p>
//           <p>
//             <strong className="text-purple-500">মালিক:</strong>{" "}
//             {broadcast.owner}
//           </p>
//         </div>

//         {/* Description Section */}
//         <div className="mb-6">
//           <motion.h2
//             className="text-xl font-semibold text-red-500 mb-2"
//             initial={{ x: -200 }}
//             animate={{ x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             বিবরণ:
//           </motion.h2>
//           <p>{description}</p>
//         </div>

//         {/* Audience & Coverage */}
//         <div>
//           <motion.h2
//             className="text-xl font-semibold text-red-500 mb-2"
//             initial={{ x: -200 }}
//             animate={{ x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             শ্রোতা ও কভারেজ:
//           </motion.h2>
//           <p>
//             <strong className="text-purple-500">শ্রোতার ধরন:</strong>{" "}
//             {audienceAndCoverage.audience.join(", ")}
//           </p>
//           <p>
//             <strong className="text-purple-500">ভাষা:</strong>{" "}
//             {audienceAndCoverage.languages}
//           </p>
//           <p>
//             <strong className="text-purple-500">কভারেজ এলাকাসমূহ:</strong>{" "}
//             {audienceAndCoverage.coverage.join(", ")}
//           </p>
//           <p>
//             <strong className="text-purple-500">বিষয়বস্তু:</strong>{" "}
//             {audienceAndCoverage.contentType}
//           </p>
//           <p>
//             <strong className="text-purple-500">কভারেজ ধরণ:</strong>{" "}
//             {audienceAndCoverage.coverageType}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;


// "use client"
// import React from "react";
// import { aboutUsData } from "@/contexts/aboutUsData";
// import { motion } from "framer-motion";

// const AboutUs: React.FC = () => {
//   const {
//     title,
//     address,
//     contact,
//     broadcast,
//     description,
//     audienceAndCoverage,
//   } = aboutUsData;

//   const cardbg = 'transition  bg-gradient-to-r from-blue-300 to-pink-300 duration-400 group-hover:opacity-100 group-hover:duration-200'

//   return (
//     <div className="font-sans py-8 mt-48 bg-gray-50 text-gray-800">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Title */}
//         <motion.h1
//           className="text-4xl font-bold text-center mb-8 text-purple-900"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {title}
//         </motion.h1>

//         {/* Grid Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Address Card */}
//           <motion.div
//             className="  bg-gradient-to-l from-blue-300 to-pink-300 duration-400 group-hover:opacity-100 group-hover:duration-200 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h2 className="text-xl font-semibold mb-4 text-gray-700">ঠিকানা</h2>
//             <ul className="list-disc pl-6 space-y-2 text-gray-600">
//               {address.map((line, index) => (
//                 <li key={index}>{line}</li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact Card */}
//           <motion.div
//             className=" bg-gradient-to-r from-blue-300 to-pink-300 duration-400 group-hover:opacity-100 group-hover:duration-200 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h2 className="text-xl font-semibold mb-4 text-gray-700">যোগাযোগ</h2>
//             <p className="text-gray-600">ফোন:</p>
//             <ul className="list-disc pl-6 space-y-2 text-gray-600">
//               {contact.phone.map((phone, index) => (
//                 <li key={index}>{phone}</li>
//               ))}
//             </ul>
//             <p className="mt-2 text-gray-600">ইমেইল: {contact.email}</p>
//             <p className="text-gray-600">ফেসবুক: {contact.facebook}</p>
//           </motion.div>

//           {/* Broadcast Card */}
//           <motion.div
//             className="  bg-gradient-to-r from-blue-300 to-pink-300 duration-400 group-hover:opacity-100 group-hover:duration-200 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h2 className="text-xl font-semibold mb-4 text-gray-700">সম্প্রচার</h2>
//             <p className="text-gray-600">ফ্রিকোয়েন্সি: {broadcast.frequency}</p>
//             <p className="text-gray-600">
//               পরীক্ষামূলক সম্প্রচার: {broadcast.yearStarted.test}
//             </p>
//             <p className="text-gray-600">
//               আনুষ্ঠানিক সম্প্রচার: {broadcast.yearStarted.official}
//             </p>
//             <p className="text-gray-600">দেশ: {broadcast.country}</p>
//             <p className="text-gray-600">মালিকানা: {broadcast.ownership}</p>
//             <p className="text-gray-600">মালিক: {broadcast.owner}</p>
//           </motion.div>

//           {/* Description Card */}
//           <motion.div
//             className="  bg-gradient-to-l from-blue-400 to-pink-300 duration-400 group-hover:opacity-100 group-hover:duration-200 shadow-md rounded-lg p-6 md:col-span-2 hover:shadow-lg transition-shadow duration-300"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h2 className="text-xl font-semibold mb-4 text-gray-700">বিবরণ</h2>
//             <p className="text-gray-600">{description}</p>
//           </motion.div>

//           {/* Audience and Coverage Card */}
//           <motion.div
//             className="  bg-gradient-to-r from-blue-300 to-pink-300 duration-400 group-hover:opacity-100 group-hover:duration-200 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h2 className="text-xl font-semibold mb-4 text-gray-700">
//               শ্রোতা এবং কভারেজ
//             </h2>
//             <h3 className="text-lg font-medium text-gray-700">শ্রোতা:</h3>
//             <ul className="list-disc pl-6 space-y-2 text-gray-600">
//               {audienceAndCoverage.audience.map((audience, index) => (
//                 <li key={index}>{audience}</li>
//               ))}
//             </ul>
//             <p className="mt-4 text-gray-600">
//               ভাষা: {audienceAndCoverage.languages}
//             </p>
//             <h3 className="mt-4 text-lg font-medium text-gray-700">
//               কভারেজ এলাকা:
//             </h3>
//             <ul className="list-disc pl-6 space-y-2 text-gray-600">
//               {audienceAndCoverage.coverage.map((area, index) => (
//                 <li key={index}>{area}</li>
//               ))}
//             </ul>
//             <p className="mt-4 text-gray-600">
//               বিষয়বস্তু: {audienceAndCoverage.contentType}
//             </p>
//             <p className="text-gray-600">
//               কভারেজ ধরন: {audienceAndCoverage.coverageType}
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

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
          className="text-4xl font-bold text-center mb-8 text-purple-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Address Card */}
          <motion.div
            className="bg-gradient-to-r from-blue-300 to-pink-300 duration-400 group-hover:opacity-100 group-hover:duration-200 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
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
            className="bg-gradient-to-l from-blue-300 to-pink-300 duration-400 group-hover:opacity-100 group-hover:duration-200 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
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
            <p className="text-gray-600">ফেসবুক: {contact.facebook}</p>
          </motion.div>

          {/* Broadcast Card */}
          <motion.div
            className="bg-gradient-to-r from-blue-300 to-pink-300 duration-400 group-hover:opacity-100 group-hover:duration-200 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
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
            className="bg-gradient-to-l from-blue-300 to-pink-300 duration-400 group-hover:opacity-100 group-hover:duration-200 shadow-md rounded-lg p-6 md:col-span-2 hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              বিবরণ
            </h2>
            <p className="text-gray-600 font-medium">{description}</p>
          </motion.div>

          {/* Audience and Coverage Card */}
          <motion.div
            className="bg-gradient-to-r from-blue-300 to-pink-300 duration-400 group-hover:opacity-100 group-hover:duration-200 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
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
