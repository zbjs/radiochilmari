'use client';

const FacebookVideoEmbed = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fradiochilmari%2Fvideos%2F3470305789941801%2F&show_text=true&width=560&t=0"
          width="100%"
          height="429"
          className="rounded-lg"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default FacebookVideoEmbed;
