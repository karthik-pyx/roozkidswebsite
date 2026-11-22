import React from 'react';
import ScrollReveal from './ScrollReveal';

const Programs = () => {
  const programs = [
    { title: 'Day Care', desc: 'Safe, loving care for your little ones during your working hours.', icon: '🍼', color: 'bg-sunshine' },
    { title: 'Play Group', desc: 'Focusing on socialization, motor skills, and imaginative play.', icon: '🧸', color: 'bg-skyBlue' },
    { title: 'Nursery', desc: 'The first step into formal early education and discovery.', icon: '🎨', color: 'bg-softPink' },
    { title: 'Classes 1–5', desc: 'Primary education built on a solid academic and creative foundation.', icon: '📚', color: 'bg-mintGreen' },
  ];

  return (
    <ScrollReveal>
      <section id="programs" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-warmOrange mb-4">Our Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Tailored pathways for every stage of early childhood development.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-3xl shadow-xl border-b-8 border-skyBlue transition-all duration-300"
              >
                <div className={`w-16 h-16 ${p.color} rounded-full flex items-center justify-center mb-6 shadow-inner`}>
                  <span className="text-3xl">{p.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Programs;
