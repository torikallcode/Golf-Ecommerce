// Navbar.js

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-100 p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-primary-0 font-bold text-xl">My Navbar</div>
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-primary-0 focus:outline-none z-5080"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <div className={`lg:flex items-center space-x-4 ${isOpen ? 'flex fixed inset-0 bg-gray-800 z-20' : 'hidden'}`}>
          <a href="#" className="text-primary-0">Home</a>
          <a href="#" className="text-primary-0">About</a>
          <a href="#" className="text-primary-0">Services</a>
          <a href="#" className="text-primary-0">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
