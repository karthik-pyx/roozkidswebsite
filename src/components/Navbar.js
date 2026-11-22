import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-warmOrange">Rooz Kids</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-700 hover:text-skyBlue px-3 py-2 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-skyBlue px-3 py-2 font-medium">About Us</a>
              <a href="#programs" className="text-gray-700 hover:text-skyBlue px-3 py-2 font-medium">Our Programs</a>
              <a href="#activities" className="text-gray-700 hover:text-skyBlue px-3 py-2 font-medium">Activities</a>
              <a href="#admissions" className="bg-warmOrange text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-bold">Admissions</a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-700" aria-label="Open Menu">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
