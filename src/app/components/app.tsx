import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="text-2xl font-bold text-gray-800 cursor-pointer">
        {/* Replace this with your logo */}
        <img src="/components/logo.png" alt="logo" className="h-8 inline-block mr-2" />
      </div>
      
      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-gray-600">
        <li className="hover:text-gray-900 cursor-pointer">Home</li>
        <li className="hover:text-gray-900 cursor-pointer">About</li>
        <li className="hover:text-gray-900 cursor-pointer">Use Cases</li>
        <li className="hover:text-gray-900 cursor-pointer">Pricing</li>
        <li className="hover:text-gray-900 cursor-pointer">Resources</li>
        <li className="hover:text-gray-900 cursor-pointer">Blog</li>
        <li className="hover:text-gray-900 cursor-pointer">Support</li>
      </ul>
      
      {/* Button */}
      <div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hidden md:block">
          Login
        </button>
      </div>

      <div className="md:hidden">
        <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            // xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

