'use client'
import React from 'react';
import { motion } from 'framer-motion';

type Feature = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const RadioChilmariAchievements: React.FC = () => {
  // রেডিও চিলমারি সম্পর্কিত অর্জনসমূহ
  const achievements: Feature[] = [
    {
      title: 'তথ্য এবং সচেতনতা',
      description:
        'রেডিও চিলমারি বিভিন্ন গুরুত্বপূর্ণ সামাজিক, স্বাস্থ্য এবং কৃষি বিষয়ক সচেতনতামূলক প্রোগ্রাম সম্প্রচার করে, যা স্থানীয় জনগণের মধ্যে সচেতনতা সৃষ্টি করেছে।',
      icon: (
       <div className='w-10 h-10'>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<path fill="#2196f3" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M22 22h4v11h-4V22zM26.5 16.5c0 1.379-1.121 2.5-2.5 2.5s-2.5-1.121-2.5-2.5S22.621 14 24 14 26.5 15.121 26.5 16.5z"></path>
</svg>
       </div>
      ),
    },
    {
      title: 'শিক্ষা ও প্রশিক্ষণ',
      description:
        'রেডিও চিলমারি স্থানীয় জনগণের জন্য শিক্ষা বিষয়ক প্রোগ্রাম আয়োজন করে, যা তাদের উন্নত জীবনযাত্রা ও দক্ষতা বৃদ্ধিতে সহায়ক হয়েছে।',
      icon: (
        <div className='text-blue-500'>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-file-minus"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="9" y1="15" x2="15" y2="15"></line>
        </svg>
        </div>
      ),
    },
    {
      title: 'স্থানীয় সংস্কৃতি সুরক্ষা',
      description:
        'এটি স্থানীয় শিল্প, গান, নৃত্য, এবং সাহিত্যকে প্রচার করার মাধ্যমে স্থানীয় সংস্কৃতির চর্চা ও সুরক্ষা নিশ্চিত করছে।',
      icon: (
        <div className='text-blue-500'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-palette"
        >
          <circle cx="13.5" cy="6.5" r=".5"></circle>
          <circle cx="17.5" cy="10.5" r=".5"></circle>
          <circle cx="8.5" cy="7.5" r=".5"></circle>
          <circle cx="6.5" cy="12.5" r=".5"></circle>
        </svg>
        </div>
      ),
    },
    {
      title: 'সমাজিক দায়িত্ববোধ',
      description:
        'বিভিন্ন সমাজসেবা কার্যক্রম, যেমন নারী ও শিশু অধিকার, পরিবেশ রক্ষা, স্বাস্থ্য সুরক্ষা ইত্যাদি বিষয়ক প্রোগ্রাম চালিয়ে যাচ্ছে।',
      icon: (
        <div className='text-blue-500'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-sliders-horizontal"
        >
          <line x1="21" y1="4" x2="14" y2="4"></line>
          <line x1="10" y1="4" x2="3" y2="4"></line>
          <line x1="21" y1="12" x2="12" y2="12"></line>
          <line x1="8" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="20" x2="16" y2="20"></line>
          <line x1="12" y1="20" x2="3" y2="20"></line>
          <line x1="14" y1="2" x2="14" y2="6"></line>
          <line x1="8" y1="10" x2="8" y2="14"></line>
          <line x1="16" y1="18" x2="16" y2="22"></line>
        </svg>
        </div>
      ),
    },
  ];

  // বিভিন্ন অনুষ্ঠানসমূহ
  const programs: Feature[] = [
    {
      title: 'সাপ্তাহিক আলোচনা অনুষ্ঠান',
      description:
        'স্থানীয় সমস্যা ও বিভিন্ন উন্নয়নমূলক কর্মকাণ্ড নিয়ে সাপ্তাহিক আলোচনা সভা সম্প্রচার করা হয়।',
      icon: (
        <div className='text-blue-500'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-terminal"
        >
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
        </div>
      ),
    },
    {
      title: 'কৃষক বিষয়ক অনুষ্ঠান',
      description:
        'কৃষকদের জন্য বিভিন্ন টিপস এবং নতুন প্রযুক্তি নিয়ে অনুষ্ঠান প্রচার করা হয়।',
      icon: (
        <div className='text-blue-500'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-grid"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="3" y1="15" x2="21" y2="15"></line>
          <line x1="9" y1="3" x2="9" y2="21"></line>
          <line x1="15" y1="3" x2="15" y2="21"></line>
        </svg>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="container space-y-6 bg-slate-100 py-8 mx-auto md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          রেডিও চিলমারি অর্জন এবং অনুষ্ঠানসমূহ
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          রেডিও চিলমারি এর মাধ্যমে স্থানীয় জনগণের মধ্যে সচেতনতা বৃদ্ধি, শিক্ষা, সংস্কৃতি এবং সমাজিক উন্নয়নে
          গুরুত্বপূর্ণ ভূমিকা পালন করছে।
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg  transition  bg-gradient-to-r from-blue-300 to-pink-300 duration-400 group-hover:opacity-100 group-hover:duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{
              backgroundColor: '#f7fafc',
              borderColor: '#e2e8f0',
            }}
          >
            <div className="text-center">
              <div className="text-4xl">{achievement.icon}</div>
              <h3 className="mt-4 text-xl font-semibold ">{achievement.title}</h3>
              <p className="text-md mt-2 ">{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg border p-6 transition  bg-gradient-to-r from-blue-300 to-pink-300 duration-400 group-hover:opacity-100 group-hover:duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{
              backgroundColor: '#f7fafc',
              borderColor: '#e2e8f0',
            }}
          >
            <div className="text-center ">
              <div className="text-4xl">{program.icon}</div>
              <h3 className="mt-4 text-xl font-semibold ">{program.title}</h3>
              <p className="text-md mt-2">{program.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RadioChilmariAchievements;
