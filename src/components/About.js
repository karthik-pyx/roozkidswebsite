import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <ScrollReveal>
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, rotate: -5 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute -top-4 -left-4 w-full h-full border-4 border-skyBlue rounded-3xl z-0"
              ></motion.div>
              <img
                src="/images/rooz.jpg"
                alt="Rooz Kids Campus"
                className="relative z-10 rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-mintGreen mb-6">About Us</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Welcome to Rooz Kids, a space where childhood is celebrated. We provide a secure, nurturing, and vibrant environment designed to foster the growth of every child's unique potential.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-cream p-6 rounded-2xl shadow-sm">
                  <div className="bg-softPink w-10 h-10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl">🌟</span>
                  </div>
                  <h3 className="font-bold mb-2">Our Vision</h3>
                  <p className="text-gray-600 text-sm">To provide a nurturing environment where every child feels empowered to discover their unique potential.</p>
                </div>
                <div className="bg-cream p-6 rounded-2xl shadow-sm">
                  <div className="bg-skyBlue w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white">
                    <span className="text-xl">🎯</span>
                  </div>
                  <h3 className="font-bold mb-2">Our Mission</h3>
                  <p className="text-gray-600 text-sm">To foster holistic development through a balanced blend of play, exploration, and structured learning.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-cream p-8 rounded-3xl border-2 border-dashed border-warmOrange text-center">
            <div className="flex justify-center items-center gap-2 mb-2">
              <span className="text-2xl">📜</span>
              <h3 className="text-xl font-bold text-warmOrange">Government Recognized</h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Rooz Kids is a government-recognized institution, ensuring high standards of safety and educational excellence for all our students.
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default About;
