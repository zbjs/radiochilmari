'use client'

import { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/bn";  // Import Bengali locale

const CurrentTimeInBangla = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const time = moment().locale('bn').format('dddd, D MMMM YYYY, h:mm:ss A');
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div className="flex justify-center items-center ">
      <p className="text-sm sm:text-xl md:text-xl lg:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 shadow-xl">
      আজ {currentTime}
      </p>
    </div>
  );
};

export default CurrentTimeInBangla;
