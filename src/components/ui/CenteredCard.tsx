import React from "react";

const CenteredCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="p-6 max-w-xl bg-white rounded-lg shadow-lg border border-gray-300 text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-purple-600 mb-4">
          নারীর অধিকার এবং নারী ও শিশু সম্পর্কিত প্রোগ্রাম
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
          নারীর অধিকার এবং নারী ও শিশু সম্পর্কিত প্রোগ্রামগুলি সচেতনতা সৃষ্টি, তথ্য
          প্রদান এবং সমাজে ইতিবাচক পরিবর্তন আনার জন্য প্রচারিত হয়। এসব প্রোগ্রামে
          নারীদের আইনি অধিকার, গার্হস্থ্য সহিংসতা, শিশুদের শিক্ষা ও সুরক্ষা,
          স্বাস্থ্য সচেতনতা, এবং নারী উদ্যোক্তাদের সাফল্য তুলে ধরা হয়। এছাড়া, শিশু
          শ্রম, পাচার ও নির্যাতন রোধে সচেতনতা তৈরি করা হয়, যা নারী ও শিশুদের
          নিরাপত্তা এবং সমান অধিকার নিশ্চিত করতে সহায়ক।
        </p>
      </div>
    </div>
  );
};

export default CenteredCard;
