'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaFacebook } from 'react-icons/fa'; // Import icons from react-icons

const ContactUs: React.FC = () => {
  return (
    <div>
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-extrabold text-gray-900" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1 }}
            >
              আমাদের অবস্থান দেখুন
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg text-gray-500" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1, delay: 0.2 }}
            >
              আমাদের অফিসিয়াল ঠিকানা এবং যোগাযোগ তথ্য
            </motion.p>
          </div>
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Google Maps Section */}
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.048994877744!2d89.66772597539406!3d25.570036677472864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fd359ed6328a4d%3A0x3d533e7b562e806e!2sRadio%20Chilmari%2099.2%20FM!5e0!3m2!1sen!2sbd!4v1732169168452!5m2!1sen!2sbd"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>

              {/* Address and Contact Details Section */}
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  {/* Address */}
                  <motion.div 
                    className="px-6 py-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    <h3 className="text-lg font-medium text-gray-900">ঠিকানা:</h3>
                    <p className="mt-1 text-gray-600">রামনা মিস্ত্রী পাড়া, চিলমারী, বাংলাদেশ, ৫৬৩০</p>
                    <p className="mt-1 text-gray-600">চিলমারী, কুড়িগ্রাম</p>
                  </motion.div>

                  {/* Contact Information */}
                  <motion.div 
                    className="border-t border-gray-200 px-6 py-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                    <div className="flex items-center mt-1 text-gray-600">
                      <FaEnvelope className="mr-2 text-blue-600" />
                      <p>ইমেল: <a href="mailto:radiochilmari@gmail.com" className="text-blue-600 hover:underline">radiochilmari@gmail.com</a></p>
                    </div>
                    <div className="flex items-center mt-1 text-gray-600">
                      <FaPhoneAlt className="mr-2 text-green-600" />
                      <p>ফোন: +৮৮০১৭১৯৪৬৪৯৮১, ০১৯৬৯-৯০৬০০৮</p>
                    </div>
                    <div className="flex items-center mt-1">
                      <FaFacebook className="mr-2 text-blue-600" />
                      <Link href="https://www.facebook.com/radiochilmari" target="_blank" className="text-blue-600 hover:underline">ফেসবুক পেজ</Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
