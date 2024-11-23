import Link from 'next/link';
import React from 'react';

const InvestmentSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          আমাদের ভিডিও অনুষ্ঠান l
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          নিয়মিত প্রকাশ করা ভিডিও গুলো দেখতে চোখ রাখুন ফেইসবুক পেজে। 
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
            <Link
              href="https://www.facebook.com/radiochilmari"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#039be5"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                ></path>
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                ></path>
              </svg>
            </Link>
            
          </div>
        </div>
        <div>
          <iframe
            className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fradiochilmari%2Fvideos%2F557155856932925%2F&show_text=false&width=560&t=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
