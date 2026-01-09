import React from 'react';
import { Award, Users, CheckCircle } from 'lucide-react';

export default function About() {
  const highlights = ['Painless Laser Dentistry', 'AI Smile Simulations', 'Advanced Implant Lab', '24/7 Support'];

  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="text-4xl font-black mb-8 leading-tight">Why Millions Trust <br/><span className="text-blue-600">Nacre Dentals?</span></h2>
        <p className="text-lg text-gray-500 leading-relaxed mb-10">We integrate Java-based precision in our workflow and medical ethics in our treatments. Every procedure is backed by data and digital diagnostics.</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-600 p-8 rounded-[2rem] text-white">
            <Award className="mb-4 opacity-80" />
            <h4 className="text-3xl font-black">15+</h4>
            <p className="text-xs font-bold uppercase tracking-widest opacity-80">Awards</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-[2rem]">
            <Users className="mb-4 text-blue-600" />
            <h4 className="text-3xl font-black">20k+</h4>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Patients</p>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        {highlights.map(t => (
          <div key={t} className="flex items-center p-5 bg-white border rounded-2xl shadow-sm hover:border-blue-600 transition-all font-bold group">
            <div className="bg-green-100 p-1.5 rounded-full mr-4 group-hover:bg-blue-100 transition-colors">
              <CheckCircle size={18} className="text-green-600 group-hover:text-blue-600" />
            </div>
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}