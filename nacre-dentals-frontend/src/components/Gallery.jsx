import React from 'react';
import { Camera } from 'lucide-react';
import smile_1 from '../assets/smile_1.jpg'
import smile_2 from '../assets/smile_2.jpg'
import smile_3 from '../assets/smile_3.jpg'

export default function Gallery() {
  const items = [
    { label: "Teeth Whitening", img: smile_1 },
    { label: "Smile Makeover", img: smile_2 },
    { label: "Dental Veneers", img: smile_3 }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div className="max-w-md">
          <h2 className="text-4xl font-black mb-4">Smile Gallery</h2>
          <p className="text-gray-500 font-medium">Visual proof of our clinical expertise in dental transformations.</p>
        </div>
        <Camera size={48} className="text-gray-100 hidden md:block" />
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((g, i) => (
          <div key={i} className="group relative rounded-[2rem] overflow-hidden shadow-lg h-[350px]">
            <img src={g.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={g.label} />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-black text-xl">{g.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}