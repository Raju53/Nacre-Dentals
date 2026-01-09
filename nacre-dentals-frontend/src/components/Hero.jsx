import React from 'react';
import hero from "../assets/hero.jpg"

export default function Hero({ scrollTo }) {
  return (
    <section id="home" className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="md:w-1/2">
        <h1 className="text-6xl md:text-7xl font-black leading-[1.05] mb-8">
          Modern Dentistry <br />
          <span className="text-blue-600 underline decoration-blue-100">For Modern People.</span>
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed max-w-lg mb-10">
          Premium dental infrastructure combined with a painless treatment approach. Your comfort is our priority.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => scrollTo('book')} 
            className="bg-blue-600 text-white px-10 py-5 rounded-[2rem] font-black text-lg shadow-2xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all"
          >
            Make Appointment
          </button>
          <button 
            onClick={() => scrollTo('services')} 
            className="border-2 border-gray-100 px-10 py-5 rounded-[2rem] font-black text-lg hover:border-blue-600 transition-all"
          >
            Our Services
          </button>
        </div>
      </div>
      <div className="md:w-1/2 relative">
        <div className="absolute inset-0 bg-blue-100 rounded-full blur-[100px] opacity-30"></div>
        <img 
          src={hero} 
          className="relative rounded-[3rem] shadow-2xl border-4 border-white h-[500px] w-full object-cover" 
          alt="Modern Dental Clinic Interior" 
        />
      </div>
    </section>
  );
}