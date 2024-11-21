'use client';

import { useEffect } from 'react';
import OurFacebookNewsData from '@/contexts/OurFacebookNewsData';
import readio_icon from '@/assets/icons/readio_icon.png';
import Image from 'next/image';

interface RadioChilmariFacebookPageProps {
  pageHref: string;
  width?: number | string;
  height?: number | string;
}

const RadioChilmariFacebookPage = ({
 
}: RadioChilmariFacebookPageProps) => {
  useEffect(() => {
    // Load the Facebook SDK
    if (!document.getElementById('facebook-jssdk')) {
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0';
      document.body.appendChild(script);
    }
  }, []);
  return (
   <div className='my-8 text-center'>
<span className='text-sm sm:text-lg md:text-xl lg:text-xl  text-blue-600 dark:text-gray-100 text-center font-extrabold'>
আমাদের অফিসিয়াল ফেসবুক পেজ l
</span>
     <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 dark:bg-gray-900 p-6 gap-6">
      
      {/* Left Side: Text Content (Bangla) */}
      <div className="max-w-lg text-center lg:text-left">
        <Image src={readio_icon} alt="Image" width={100} height={100} />
        <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-purple-800 dark:text-gray-100">
          {OurFacebookNewsData.title_1}
        </h1>
        <p className="mt-4 text-gray-900 dark:text-gray-300">
          {OurFacebookNewsData.description}
        </p>
        
      </div>

      {/* Right Side: Facebook Page Embed */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <div
          className="fb-page"
          data-href="https://www.facebook.com/radiochilmari"
          data-tabs="timeline"
          data-width="400"
          data-height="500"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        ></div>

        {/* Facebook Share Button */}
        <div className="mt-4 text-center">
          <div
            className="fb-share-button"
            data-href="https://www.facebook.com/radiochilmari"
            data-layout="button"
          ></div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default RadioChilmariFacebookPage;
