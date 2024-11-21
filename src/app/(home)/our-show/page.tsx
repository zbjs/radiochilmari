import HoursCard from '@/components/ui/HoursCard';
import RdrsProgram from '@/components/ui/RdrsProgram';
import Link from 'next/link';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';

const OuerShow = () => {
  return (
    <div className="mt-20">
      {/* Header Section */}
      <div className="text-center mt-30 py-10">
        <span className=" text-sm sm:text-lg md:text-xl lg:text-xl text-blue-600 dark:text-gray-100 font-extrabold">
          আমাদের অফিসিয়াল ফেসবুক পেজে চোখ রাখুন, প্রতিদিনের অনুষ্ঠান সূচী দেখতে ক্লিক করুন:
        </span>
        <span>
        <Link
          href="https://www.facebook.com/radiochilmari"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="inline-block text-3xl ml-5 text-blue-600 dark:text-gray-100" />
        </Link>
        </span>
        
      </div>
      
      {/* Main Content Section */}
      <main>
        <HoursCard />
        <RdrsProgram />
      </main>
    </div>
  );
};

export default OuerShow;
