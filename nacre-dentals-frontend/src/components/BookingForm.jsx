import React, { useState } from 'react';
import { User, Phone, MapPin, CheckCircle } from 'lucide-react';

export default function BookingForm({ API_URL }) {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', appointmentDate: '', service: 'General Checkup'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', mobile: '', appointmentDate: '', service: 'General Checkup' });
        setTimeout(() => setStatus('idle'), 5000);
      } else { setStatus('error'); }
    } catch { setStatus('error'); }
  };

  return (
    <section id="book" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        <div className="md:w-2/5 bg-blue-600 p-12 text-white">
          <h2 className="text-4xl font-black mb-6 leading-tight">Ready for a <br/>New Smile?</h2>
          <p className="text-blue-100 font-medium mb-10">Choose your preferred date and secure your appointment with our specialists.</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4"><Phone className="text-blue-300"/> <span className="font-bold">+91 9876543210</span></div>
            <div className="flex items-center gap-4"><MapPin className="text-blue-300"/> <span className="font-bold">Gachibowli, Hyderabad</span></div>
          </div>
        </div>
        <div className="md:w-3/5 p-12 bg-white">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <div className="bg-green-100 p-4 rounded-full mb-6 animate-bounce"><CheckCircle size={48} className="text-green-600" /></div>
              <h3 className="text-3xl font-black mb-2">Success!</h3>
              <p className="text-gray-500 font-bold">Confirmation sent to your email.</p>
              <button onClick={() => setStatus('idle')} className="mt-8 text-blue-600 font-bold hover:underline">Book another visit</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input required type="text" placeholder="Full Name" className="w-full pl-12 pr-4 py-4 bg-gray-50 border-0 rounded-2xl font-bold" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input required type="email" placeholder="Email" className="w-full px-4 py-4 bg-gray-50 border-0 rounded-2xl font-bold" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                <input required type="tel" placeholder="Mobile" className="w-full px-4 py-4 bg-gray-50 border-0 rounded-2xl font-bold" value={formData.mobile} onChange={e => setFormData({...formData, mobile: e.target.value})} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input required type="date" className="w-full px-4 py-4 bg-gray-50 border-0 rounded-2xl font-bold text-gray-500" value={formData.appointmentDate} onChange={e => setFormData({...formData, appointmentDate: e.target.value})} min={new Date().toISOString().split('T')[0]} />
                <select className="w-full px-4 py-4 bg-gray-50 border-0 rounded-2xl font-bold appearance-none" value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                  <option>General Checkup</option><option>Teeth Whitening</option><option>Root Canal</option><option>Dental Implants</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-[2rem] font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
                {status === 'loading' ? 'Processing...' : 'Secure My Slot'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}