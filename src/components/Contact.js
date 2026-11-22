import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-skyBlue mb-4">Get in Touch</h2>
          <p className="text-gray-600">Have questions? We'd love to hear from you.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-10 bg-white rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="font-bold mb-2 text-xl">Address</h3>
            <p className="text-gray-600">Plot No. 123, Sunshine Lane,<br />Education Hub, City Center</p>
          </div>
          <div className="p-10 bg-white rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">📞</div>
            <h3 className="font-bold mb-2 text-xl">Phone</h3>
            <p className="text-gray-600">+91 98765 43210<br />+91 98765 43211</p>
          </div>
          <div className="p-10 bg-white rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">✉️</div>
            <h3 className="font-bold mb-2 text-xl">Email</h3>
            <p className="text-gray-600">hello@roozkidz.com<br />admissions@roozkidz.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
