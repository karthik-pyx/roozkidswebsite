import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Parent of a 4-year-old",
      text: "Rooz Kids has been an absolute blessing. The teachers are so patient, and the creative activities keep my daughter excited to go every single morning!",
    },
    {
      name: "Michael Chen",
      role: "Parent of a 6-year-old",
      text: "I love how they balance academics with play. The nursery program was perfect for our toddler, and the transition to primary school was seamless.",
    },
    {
      name: "Elena Rodriguez",
      role: "Parent of a 3-year-old",
      text: "The environment is so safe and welcoming. My son has made so many friends and learned so much about art and music.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-skyBlue mb-4">What Parents Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Hear from the families who are part of our growing community.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-warmOrange"
            >
              <div className="text-4xl mb-4">💬</div>
              <p className="italic text-gray-600 mb-6">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-skyBlue rounded-full flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
