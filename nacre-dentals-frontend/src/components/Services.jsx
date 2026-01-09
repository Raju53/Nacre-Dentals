import React from 'react';

export default function Services() {
  const treatments = [
    { t: 'Root Canal', d: 'Specialized endodontic care using pain-free laser technology.', icon: '⚡' },
    { t: 'Smile Design', d: 'Custom veneers and digital smile simulations for your face.', icon: '✨' },
    { t: 'Pediatric Care', d: 'Friendly environment for kids to build lifelong habits.', icon: '🧸' }
  ];

  return (
    <section id="services" className="py-32 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-black mb-4">World Class Treatments</h2>
        <p className="text-gray-400 font-bold tracking-[0.2em] uppercase text-xs">Precisely handled by our Java backend system</p>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {treatments.map((s, i) => (
          <div key={i} className="bg-white p-12 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl transition-all group">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-blue-600 transition-colors group-hover:scale-110 duration-300">
              {s.icon}
            </div>
            <h3 className="text-2xl font-black mb-4">{s.t}</h3>
            <p className="text-gray-500 leading-relaxed font-medium">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}