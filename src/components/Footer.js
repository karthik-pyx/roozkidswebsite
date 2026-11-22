import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-skyBlue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Rooz Kids</h3>
            <p className="text-sm opacity-90">
              A government-recognised school offering Day Care, Play Group, Nursery and primary education up to Class 5.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>📍 [Insert Address Here]</li>
              <li>📞 [Insert Phone Number]</li>
              <li>📧 [Insert Email Address]</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#admissions" className="hover:underline">Admissions</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-xs opacity-70">
          &copy; {new Date().getFullYear()} Rooz Kidz. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
