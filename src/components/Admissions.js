import React from 'react';

const Admissions = () => {
  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-mintGreen">Join the Rooz Kids Family</h2>
            <p className="text-gray-600 text-lg">
              Secure your child's place in our vibrant community. Our admissions process is simple and transparent.
              Fill out the form below and our team will reach out to schedule a campus tour and a personal consultation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-sunshine p-2 rounded-full shadow-sm">✓</span>
                <span className="font-medium">Government-recognized curriculum</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-skyBlue p-2 rounded-full shadow-sm">✓</span>
                <span className="font-medium">Safe & Secure campus</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-softPink p-2 rounded-full shadow-sm">✓</span>
                <span className="font-medium">Expert educators</span>
              </div>
            </div>
          </div>
          <div className="bg-cream p-10 rounded-3xl shadow-2xl border-2 border-skyBlue">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-bold mb-1 text-gray-700">Parent Name</label>
                <input type="text" className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-skyBlue outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1 text-gray-700">Child's Age</label>
                <input type="text" className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-skyBlue outline-none" placeholder="3 years" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1 text-gray-700">Phone Number</label>
                <input type="tel" className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-skyBlue outline-none" placeholder="+91 XXXXX XXXXX" />
              </div>
              <button className="w-full bg-warmOrange text-white py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
