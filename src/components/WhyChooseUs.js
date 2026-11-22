import React from 'react';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl border-4 border-softPink">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-warmOrange mb-4">Why Choose Rooz Kids?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A premier educational journey designed to nurture your child's heart and mind.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex gap-6 items-start">
              <div className="bg-sunshine p-4 rounded-2xl shadow-md text-4xl">🏫</div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-skyBlue">Premier Environment</h3>
                <p className="text-gray-600">Modern facilities and a child-centric layout designed for safety and exploration.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-skyBlue p-4 rounded-2xl shadow-md text-4xl">👩‍🏫</div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-warmOrange">Expert Care</h3>
                <p className="text-gray-600">Certified educators who understand early childhood psychology and pedagogy.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-softPink p-4 rounded-2xl shadow-md text-4xl">🎨</div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-mintGreen">Creative Focus</h3>
                <p className="text-gray-600">Emphasis on arts, music, and creative thinking to spark individuality.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-mintGreen p-4 rounded-2xl shadow-md text-4xl">🌱</div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-warmOrange">Holistic Growth</h3>
                <p className="text-gray-600">We focus on social-emotional intelligence alongside academic excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
