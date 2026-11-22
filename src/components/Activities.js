import React from 'react';
import ScrollReveal from './ScrollReveal';

const Activities = () => {
  return (
    <ScrollReveal>
      <section id="activities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mintGreen mb-4">Activities & Learning</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Where imagination meets education through hands-on experiences.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Arts & Crafts', img: '🎨', color: 'bg-sunshine' },
              { title: 'Classroom Learning', img: '📖', color: 'bg-skyBlue' },
              { title: 'Games & Sports', img: '⚽', color: 'bg-softPink' },
              { title: 'Celebrations', img: '🎉', color: 'bg-mintGreen' }
            ].map((act, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`relative group rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 shadow-lg ${act.color}`}
              >
                <span className="text-6xl mb-4">{act.img}</span>
                <h3 className="text-xl font-bold text-gray-800">{act.title}</h3>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity rounded-3xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Activities;
