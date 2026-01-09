import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import doc1 from '../assets/doctor_1.jpg';
import doc2 from '../assets/doctor_2.jpg';
import doc3 from '../assets/doctor_3.jpg';

export default function Doctors() {
  const doctors = [
    { name: "Dr. John Doe", role: "Chief Orthodontist", bio: "12+ years experience in smile design.", img: doc1 },
    { name: "Dr. Vamshi Kumar", role: "Oral Surgeon", bio: "Specialist in complex dental implants.", img: doc2 },
    { name: "Dr. Priyanka", role: "Pediatric Dentist", bio: "Making dental visits fun for the little ones.", img: doc3 }
  ];

  return (
    <section className="py-32 bg-blue-50 px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-black mb-4">Meet Our Specialists</h2>
        <p className="text-blue-600 font-bold uppercase text-xs tracking-widest">Global Expertise, Local Care</p>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {doctors.map((d, i) => (
          <div key={i} className="bg-white p-6 rounded-[2.5rem] border shadow-sm hover:shadow-xl transition-all">
            <img src={d.img} className="w-full h-64 object-cover rounded-[2rem] mb-6" alt={d.name} />
            <div className="px-4 pb-4">
              <h4 className="text-xl font-black mb-1">{d.name}</h4>
              <p className="text-blue-600 font-bold text-sm mb-4">{d.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{d.bio}</p>
              <div className="flex gap-4">
                <Linkedin size={18} className="text-gray-300 hover:text-blue-600 cursor-pointer transition-colors" />
                <Instagram size={18} className="text-gray-300 hover:text-pink-600 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}