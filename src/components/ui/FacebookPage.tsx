'use client';

import { useEffect } from 'react';

const RadioChilmariFacebookPage = () => {
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
    <div className="flex items-center justify-between h-screen bg-gray-100 dark:bg-gray-900 p-6">
      {/* Left Side: Text Content */}
      <div className="max-w-lg">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Our Facebook Page
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Stay updated all the time! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Perspiciatis incidunt velit asperiores voluptate necessitatibus voluptates harum tempora atque quo. 
          Saepe vitae ad dicta neque voluptatibus ut officiis ducimus perspiciatis eos?
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
  );
};

export default RadioChilmariFacebookPage;
