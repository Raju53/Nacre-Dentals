import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    "The root canal was zero-pain. Amazing tech!", 
    "Veneers changed my life. Dr. Sarah is a wizard.", 
    "Best pediatric clinic in the state. My kids love it."
  ];

  return (
    <section id="testimonials" className="py-32 bg-blue-900 text-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-black mb-20">Patient Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((t, i) => (
            <div key={i} className="bg-white/10 p-10 rounded-[2.5rem] border border-white/20 italic backdrop-blur-sm">
              <Star className="text-yellow-400 mb-6" fill="currentColor" size={18} />
              <p className="text-xl mb-8 leading-relaxed">"{t}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">P</div>
                <div>
                  <h5 className="font-bold">Verified Patient</h5>
                  <p className="text-xs text-blue-300">Google Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}