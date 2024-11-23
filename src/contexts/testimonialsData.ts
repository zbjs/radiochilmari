
interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string;
    testimonial: string;
    link: string;
  }
  
  const testimonialsData: Testimonial[] = [
    {
      id: 1,
      name: "Abu Musa",
      role: "Radio jockey",
      image: "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-1/453904878_3663075257339214_456855657347799049_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=50d2ac&_nc_ohc=WWL3LZP5KDcQ7kNvgGdBJso&_nc_zt=24&_nc_ht=scontent.fdac5-1.fna&_nc_gid=AlFodEjFh3oZTvLQnGVyr3T&oh=00_AYDaRpn79vEcBmCk8Aw7ZOfmTxdQ6zTqZhmMTMBibdCDXg&oe=6747BE9A",
      testimonial: "অনেক পরিশ্রমের পরে একটি রেডিও চিলমারীর প্রতিষ্ঠিত হয়েছে। যেখানে অনেক মানুষের ঘাম ঝরানো ভালোবাসা রয়েছে। হয়তো তাদের মধ্যে অনেকেই এখন এখানে নেই, তাদের ভালোবাসা কিন্তু এখনো আছে।যেটা না বললেও তাদের মনের মধ্যে আজীবন থাকবে।শুভকামনা.",
      link: "https://www.facebook.com/profile.php?id=100009103282315",
    },
    
    {
      id: 2,
      name: "Md Palash Islam ",
      role: "Radio jockey",
      image: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-1/467506516_1750426602446442_6008896685095180479_n.jpg?stp=c0.0.716.716a_dst-jpg_s160x160&_nc_cat=108&ccb=1-7&_nc_sid=50d2ac&_nc_ohc=AmEoPUgisd0Q7kNvgFTh6Sv&_nc_zt=24&_nc_ht=scontent.fdac5-2.fna&_nc_gid=AXYJBnIkRuEqf41MQTxu_Ot&oh=00_AYACbVS-Y2QP6jjZHZc1fZWU-bmuKOSoI4crDWC0qraJEQ&oe=6747AEC8",
      testimonial: "আমি প্রথম রিভিউ করলাম... একে দিন সফলতার পথ পাবে ইনশাআল্লাহ।.",
      link: "https://www.facebook.com/rj.palash.50596",
    },
    {
      id: 3,
      name: "Md Shofiul Islam Shahin",
      role: "Audience",
      image: "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-1/457051055_1968580596919978_4233942231449241780_n.jpg?stp=c0.279.1491.1490a_dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=jcldxi1qVusQ7kNvgGy6MGx&_nc_zt=24&_nc_ht=scontent.fdac5-1.fna&_nc_gid=AquU-fYIObS_PVoMiCDuYg0&oh=00_AYADKJ8IJU7uHhuVyrwO_Ln8lmLjFFDZCGKFPsWG8qQUgQ&oe=6747C421",
      testimonial: "কোনো একদিন ফিরবো ইনশাআল্লাহ, সফলতার গল্প শোনাতে, সে পর্যন্ত ভালো থাকুন সুস্থ থাকুন.. আল্লাহ হাফেজ 🥰",
      link: "https://www.facebook.com/mdshofiulislam.shahin",
    },
    {
      id: 4,
      name: "নাইমা আক্তার লিজা",
      role: "Audience",
      image: "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/449436352_122120037524317068_7287112059205361388_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1DlF9dCfvxsQ7kNvgF-wMJW&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=AxDSN3w62Uo8UdFQBGdeYbZ&oh=00_AYCRgiraFWgtehfsQr_pRPDy06Y-4tq75IFWYGoLlG4zRw&oe=6747AF48",
      testimonial: "ব্যক্তিগত অগ্রগতি ও পেশাগত উৎকর্ষ বৃদ্ধি বিষয়ক বিশেষ অনুষ্ঠান ‘উৎকর্ষ’ এর ৩২ তম পর্বের কুইজ বিজয়ী শ্রোতা হিসেবে নির্বাচিত হয়েছেন নাইমা আক্তার লিজা, কিশোরগঞ্জ, ঢাকা।অভিনন্দন আপনাকে। 🥰",
      link: "https://www.facebook.com/#",
    },
    {
      id: 5,
      name: "কাব্যিক রেজা",
      role: "Audience",
      image: "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/456085666_513830204473714_2441272105081449632_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Nr28IbsuYdEQ7kNvgEwpOgp&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=ARLi4R3A1wg16agh9GL5KcQ&oh=00_AYAWXDJHCFUOcgW4WYi5DMKsdGob0Boj-LlBidVdz3v-Fg&oe=6747AFFD",
      testimonial: "ছোট্ট কবি রেজা,দুঃখে আঁখি ভেঁজা",
      link: "https://www.facebook.com/profile.php?id=100075402164656",
    },
    {
      id: 6,
      name: "Ridoy Chandro Bormon",
      role: "Audience",
      image: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/455845986_122130456572317068_5096302906579422928_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yVP7zA9KcN4Q7kNvgEsRXYe&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=AvO8pkO4UzOUnepxj_OqILr&oh=00_AYCLl-kr3jE3ERj0AAl0M959FN3Jh-lU9bOVf9ZdH2uaLw&oe=6747C968",
      testimonial: "ব্যক্তিগত অগ্রগতি ও পেশাগত উৎকর্ষ বৃদ্ধি বিষয়ক বিশেষ অনুষ্ঠান ‘উৎকর্ষ’ এর ৩৫ তম পর্বের কুইজ বিজয়ী শ্রোতা হিসেবে নির্বাচিত হয়েছেন হৃদয় বর্মণ, উলিপুর, কুড়িগ্রাম।অভিনন্দন আপনাকে।",
      link: "https://www.facebook.com/Ridoychandrobormon2",
    }
    
  ];
  

  export default testimonialsData;