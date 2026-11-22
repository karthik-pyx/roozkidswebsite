import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-sunshine opacity-20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-skyBlue opacity-20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-softPink opacity-10 rounded-full blur-2xl"
      />
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative bg-cream py-20 md:py-32 overflow-hidden">
      <BackgroundBlobs />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-warmOrange mb-6 leading-tight">
              Little Steps, <br />
              <span className="text-skyBlue">Big Dreams!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Welcome to Rooz Kids, where we nurture your child's curiosity and spark a lifelong love for learning in a safe, vibrant environment.
            </p>
            <button className="bg-warmOrange text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-orange-600 transition-all transform hover:scale-105">
              Enquire Now
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-full h-[400px] md:h-[500px] bg-white rounded-3xl overflow-hidden border-8 border-white shadow-2xl relative z-20">
              <img
                src="/images/kidz.webp"
                alt="Children playing and learning at Rooz Kids"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-sunshine opacity-30 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
