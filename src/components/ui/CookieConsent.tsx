'use client';

import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  // State to control visibility of the cookie consent
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Show the consent bar only if the user has not given consent
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  // Handle the "Accept" button click
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  // Handle the "Decline" button click
  const handleDecline = () => {
    setIsVisible(false); // Just hide the consent bar
  };

  // Do not render if not visible
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 right-0 flex items-center justify-center py-4 z-50 mx-4 w-full md:w-auto">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between rounded-lg border bg-white dark:bg-gray-800 p-4 shadow-lg transition-all">
          {/* Content Left */}
          <div className="w-full md:w-7/12 lg:w-2/3 flex items-center px-2">
            <span className="text-indigo-500 mr-4" aria-hidden="true">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
            </span>
            <div>
              <h3 className="text-lg font-bold text-black dark:text-white">We use cookies</h3>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Please accept our cookies so we can provide the best experience.
              </p>
            </div>
          </div>
          {/* Buttons */}
          <div className="w-full md:w-5/12 lg:w-1/3 flex items-center space-x-3 md:justify-end mt-4 md:mt-0">
            <button
              onClick={handleDecline}
              className="rounded-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-100 px-6 py-2 transition-all"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="rounded-full bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 transition-all"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
