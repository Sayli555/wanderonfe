import React from 'react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const ListHeader = ({ children }) => {
  return (
    <h3 className="font-medium text-lg mb-2">
      {children}
    </h3>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <a
      className="bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transition-all hover:bg-black hover:bg-opacity-20 dark:hover:bg-white dark:hover:bg-opacity-20"
      href={href}
      aria-label={label}
    >
      {children}
    </a>
  );
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <ListHeader>Company</ListHeader>
            <ul>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <ListHeader>Support</ListHeader>
            <ul>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Safety Center</a></li>
              <li><a href="#" className="hover:underline">Community Guidelines</a></li>
            </ul>
          </div>

          <div>
            <ListHeader>Legal</ListHeader>
            <ul>
              <li><a href="#" className="hover:underline">Cookies Policy</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Law Enforcement</a></li>
            </ul>
          </div>

          <div>
            <ListHeader>Install App</ListHeader>
            {/* Uncomment and replace the following with actual AppStore and PlayStore badges */}
            {/* <AppStoreBadge /> */}
            {/* <PlayStoreBadge /> */}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto py-4 px-4 flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 WanderOn. All rights reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <SocialButton label="Twitter" href="#">
              <FaTwitter />
            </SocialButton>
            <SocialButton label="YouTube" href="#">
              <FaYoutube />
            </SocialButton>
            <SocialButton label="Instagram" href="#">
              <FaInstagram />
            </SocialButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
