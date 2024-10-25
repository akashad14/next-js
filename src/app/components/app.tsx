import Link from 'next/link';
import Image from 'next/image';
// import img1 from './images/img1.jpg';
// import img2 from './components/images/img2.jpg';

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      <div className="text-xl font-bold">Everything Talent</div>
      <ul className="flex space-x-6 text-gray-700">
        <li className="hover:text-gray-900 cursor-pointer">Home</li>
        <li className="hover:text-gray-900 cursor-pointer">About</li>
        <li className="hover:text-gray-900 cursor-pointer">Use Cases</li>
        <li className="hover:text-gray-900 cursor-pointer">Pricing</li>
        <li className="hover:text-gray-900 cursor-pointer">Resources</li>
        <li className="hover:text-gray-900 cursor-pointer">Blog</li>
        <li className="hover:text-gray-900 cursor-pointer">Support</li>
      </ul>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Login
      </button>
      
    </nav>
    
    
    
  );
};

export default Navbar;

