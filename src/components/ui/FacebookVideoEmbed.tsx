"use client";

const FacebookVideoEmbed = () => {
  return (
    <div>
      <div>
        <span className="text-sm sm:text-lg md:text-xl lg:text-xl  text-blue-600 dark:text-gray-100 text-center font-extrabold">
          আমাদের ভিডিও অনুষ্ঠান l
        </span>
      </div>
      <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
        <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {/* Video 1 */}
            <div className="flex justify-center">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fradiochilmari%2Fvideos%2F1501842613838233%2F&show_text=false&width=560&t=0"
                width="100%"
                height="314"
                className="rounded-lg"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>

            {/* Video 2 */}
            <div className="flex justify-center">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fradiochilmari%2Fvideos%2F593910082992540%2F&show_text=false&width=560&t=0"
                width="100%"
                height="314"
                className="rounded-lg"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>

            {/* Video 3 */}
            <div className="flex justify-center">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2Fradiochilmari%2Fvideos%2F551710727483603%2F&show_text=false&width=560&t=0"
                width="100%"
                height="315"
                className="rounded-lg"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>

            {/* Video 4 */}
            <div className="flex justify-center">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fradiochilmari%2Fvideos%2F1069391811599032%2F&show_text=false&width=560&t=0"
                width="100%"
                height="314"
                className="rounded-lg"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>

            {/* Video 5 */}
            <div className="flex justify-center">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fradiochilmari%2Fvideos%2F1639086690351355%2F&show_text=false&width=560&t=0"
                width="100%"
                height="314"
                className="rounded-lg"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookVideoEmbed;
