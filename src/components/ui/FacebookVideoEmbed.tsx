"use client";

import React from "react";

const FacebookVideoEmbed: React.FC = () => {
  // Video data array
  const videoData = [
    {
      src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fradiochilmari%2Fvideos%2F1501842613838233%2F&show_text=false&width=560&t=0",
      height: 314,
    },
    {
      src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fradiochilmari%2Fvideos%2F593910082992540%2F&show_text=false&width=560&t=0",
      height: 314,
    },
    {
      src: "https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2Fradiochilmari%2Fvideos%2F551710727483603%2F&show_text=false&width=560&t=0",
      height: 315,
    },
    {
      src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fradiochilmari%2Fvideos%2F1069391811599032%2F&show_text=false&width=560&t=0",
      height: 314,
    },
    {
      src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fradiochilmari%2Fvideos%2F1639086690351355%2F&show_text=false&width=560&t=0",
      height: 314,
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-1 md:gap-2 lg:gap-4">
          {videoData.map((video, index) => (
            <div key={index} className="flex justify-center">
              <iframe
                src={video.src}
                width="100%"
                height={video.height}
                className="rounded-lg"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacebookVideoEmbed;
