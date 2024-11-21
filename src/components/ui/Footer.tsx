import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        {/* Divider */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Footer Bottom Section */}
        <div className="flex items-center justify-between">
          {/* Left Section - Logos */}
          <div className="flex items-center space-x-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9SxGXUwdwjvhxP6YS2e1YZ1OSfWmKxQICtg&s" // Replace with actual path to RDRS logo
              alt="RDRS Logo"
              className="h-10 w-10"
            />
            <img
              src="https://www.bcrabd.org/cloud/archives/2019/04/radio-chilmari.jpg" // Replace with actual path to RadioChilmari logo
              alt="RadioChilmari Logo"
              className="h-10 w-10"
            />
          </div>

          {/* Center Section - Copyright Text */}
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © ২০২৪{" "}
            <span className="font-bold text-blue-600 dark:text-blue-400">
              সর্বস্বত্ব সংরক্ষিত।
            </span>
          </span>

          {/* Right Section - Social Media Icons */}
          <div className="flex items-center space-x-4">
            <Link
              href="https://www.facebook.com/radiochilmari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#039be5"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                ></path>
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
