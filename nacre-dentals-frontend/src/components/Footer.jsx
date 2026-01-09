import React from 'react';
import { Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <div className="flex items-center mb-6">
            <Activity className="text-blue-500 mr-2" />
            <span className="text-2xl font-black">NACRE DENTALS</span>
          </div>
          <p className="text-gray-500 max-w-xs leading-relaxed font-medium">
            World-class infrastructure for your family's oral health.
          </p>
        </div>
        <div>
          <div className="flex items-center mb-6">
            <p className="text-2xl font-black">Contact Us @</p>
          </div>
          <p className="text-gray-500 max-w-xs leading-relaxed font-medium">Phone: +91 9876543210</p>
          <p className="text-gray-500 max-w-xs leading-relaxed font-medium">Email id: nacre@dentals.com</p>
        </div>
        <div className="grid grid-cols-2 gap-16">
          <div>
            <h5 className="font-bold mb-6 text-blue-500 uppercase text-xs tracking-widest">Navigation</h5>
            <ul className="space-y-4 text-gray-400 font-bold text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Services</li>
              <li className="hover:text-white cursor-pointer transition-colors">About</li>
              <li className="hover:text-white cursor-pointer transition-colors">Doctors</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-blue-500 uppercase text-xs tracking-widest">Legal</h5>
            <ul className="space-y-4 text-gray-400 font-bold text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Privacy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms</li>
              <li className="hover:text-white cursor-pointer transition-colors">Support</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-gray-800 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
        <span>© 2026 Nacre Dentals Hospital</span>
        <span>Designed with Passion</span>
      </div>
    </footer>
  );
}