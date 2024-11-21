'use client';
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react';
import OurFacebookNewsData from '@/contexts/OurFacebookNewsData';
import { motion } from 'framer-motion'; // Import framer-motion

const OurFacebookNews = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between h-screen bg-gray-100 dark:bg-gray-900 p-6 gap-6">
      {/* Left Side: Text Content (Bangla) */}
      <div className="flex flex-col items-center text-center lg:text-left">
        <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-400 font-bengali">
          {OurFacebookNewsData.title}
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 font-bengali">
          {OurFacebookNewsData.description}
        </p>
        <h2 className="text-2xl font-semibold mt-6 text-green-600 dark:text-green-400 font-bengali">
          {OurFacebookNewsData.programs[0].type}
        </h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-4 font-bengali">
          {OurFacebookNewsData.programs[0].details.map((detail: string | number | bigint | boolean | ReactElement<never, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, index: Key | null | undefined) => (
            <motion.li
              key={index}
              className="text-gray-700 dark:text-gray-400 hover:bg-red-200 dark:hover:bg-red-800 p-2 rounded-lg"
              whileHover={{ scale: 1.05 }} // Animation on hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              {detail}
            </motion.li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mt-6 text-purple-600 dark:text-purple-400 font-bengali">
          {OurFacebookNewsData.programs[1].type}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 font-bengali">
          {OurFacebookNewsData.programs[1].details}
        </p>
        <h2 className="text-sm sm:text-lg md:text-2xl lg:text-5xl font-semibold mt-6 text-red-600 dark:text-red-400 font-bengali">
          আমাদের ফেইসবুক পেজে কেন যুক্ত হবেন?
        </h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-4 font-bengali">
          {OurFacebookNewsData.facebookPageReasons.map((reason: string | number | bigint | boolean | ReactElement<never, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, index: Key | null | undefined) => (
            <motion.li
              key={index}
              className="text-gray-700 dark:text-gray-400 hover:bg-red-200 dark:hover:bg-red-800 p-2 rounded-lg"
              whileHover={{ scale: 1.05 }} // Animation on hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              {reason}
            </motion.li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mt-6 text-purple-600 dark:text-purple-400 font-bengali">
          চোখ রাখুন Radio Chilmary-তে!
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 font-bengali">
          {OurFacebookNewsData.closingMessage}
        </p>
      </div>
    </div>
  );
};

export default OurFacebookNews;
