import React, { useState } from "react";

const CookieConsent: React.FC = () => {
  // State to control the visibility of the cookie consent
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // Function to handle the "Accept" button click
  const handleAccept = () => {
    // Set the cookie to indicate consent has been given (or use localStorage)
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false); // Hide the cookie consent popup
  };

  // Check if the user has already accepted cookies
  const hasAcceptedCookies = localStorage.getItem("cookieConsent");

  // If cookies are accepted, don't show the banner
  if (hasAcceptedCookies) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-12 left-1/2 z-50 -translate-x-1/2 rounded-full bg-white dark:bg-gray-800 p-4 drop-shadow-2xl w-11/12 sm:w-1/2 ${
        isVisible ? "block" : "hidden"
      }`}
      id="gdpr"
    >
      <div className="flex items-center justify-between gap-6 text-sm">
        <div className="content-left pl-4 dark:text-white">
          This website uses cookies to improve your web experience.
        </div>
        <div className="content-right text-end">
          <button
            onClick={handleAccept}
            className="cursor-pointer rounded-full bg-black dark:bg-gray-600 px-4 py-2 text-white"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;