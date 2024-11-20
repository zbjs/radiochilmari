'use client';

import { useEffect } from 'react';

const FacebookVideoEmbed = () => {
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
      {/* Add the Facebook Embedded Video */}
      <div
        className="fb-video"
        data-href="https://www.facebook.com/facebook/videos/10153231379946729/"
        data-width="500"
        data-show-text="false"
      ></div>


<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fradiochilmari%2Fvideos%2F3470305789941801%2F&show_text=false&width=560&t=0" width="560" height="314" style={{border:"none",overflow:"hidden"}} scrolling="no"  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>
    </div>
  );
};

export default FacebookVideoEmbed;
