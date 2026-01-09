import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShieldCheck, Activity } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar({ activeSection, scrollTo, setView }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['home', 'services', 'about', 'testimonials'];

  const handleNavClick = (section) => {
    scrollTo(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => scrollTo('home')}>
          <img src={logo} alt="Nacre Logo" className="h-11 w-11 object-contain mr-2"/>
          <span className="text-2xl font-black tracking-tight">
            NACRE<span className="text-blue-600">DENTALS</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((s) => (
            <button
              key={s}
              onClick={() => handleNavClick(s)}
              className={`capitalize font-bold text-sm tracking-wide transition-colors ${
                activeSection === s ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'
              }`}
            >
              {s}
            </button>
          ))}
          <button
            onClick={() => scrollTo('book')}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all"
          >
            Book Now
          </button>
          <Link 
            to="/login" 
            className="text-gray-300 hover:text-blue-600 transition-colors"
            title="Admin Login"
          >
            <ShieldCheck size={20} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-6 space-y-4 border-t animate-in">
          {[...navLinks, 'book'].map((s) => (
            <button
              key={s}
              onClick={() => handleNavClick(s)}
              className="block w-full text-left capitalize font-bold text-gray-600"
            >
              {s}
            </button>
          ))}
          <Link to="/login" className="block font-bold text-gray-400 flex items-center gap-2">
            <ShieldCheck size={18} /> Admin Access
          </Link>
        </div>
      )}
    </nav>
  );
}