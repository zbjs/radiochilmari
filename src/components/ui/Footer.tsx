import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        {/* Divider */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Footer Bottom Section */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © ২০২৪{' '}
            <a href="https://kazibyte.github.io" className="hover:underline">
              Kazi Byte
            </a>
            . . সর্বস্বত্ব সংরক্ষিত।
          </span>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            <a
              href="https://www.facebook.com/radiochilmari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Facebook"
            >
 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
</svg>


            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
