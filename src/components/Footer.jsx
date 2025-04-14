import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/personal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black-200 py-8">
      <div className="container-padding mx-auto text-center">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white-100">
            {personalInfo.name.split(' ')[0]}<span className="text-secondary">.dev</span>
          </h2>
        </div>
        
        <div className="text-secondary text-sm">
          <p className="mb-2">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-1" /> using React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 