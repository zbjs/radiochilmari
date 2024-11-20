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
    <div>
      {/* Embed Radio Chilmari Facebook Page */}
      <div
        className="fb-page"
        data-href="https://www.facebook.com/radiochilmari"
        data-tabs="timeline"
        data-width="500"
        data-height="600"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      ></div>

      {/* Facebook Share Button */}
      <div className="mt-4">
        <div
          className="fb-share-button"
          data-href="https://www.facebook.com/radiochilmari"
          data-layout="button"
        ></div>
      </div>
    </div>
  );
};

export default RadioChilmariFacebookPage;
