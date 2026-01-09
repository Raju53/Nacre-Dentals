import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Key, Lock } from 'lucide-react';
import { setAdminSession } from '../utils/session';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (creds.username === 'admin' && creds.password === 'nacredentals123') {
      setAdminSession();
      navigate('/admin');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white p-10 rounded-[2.5rem] shadow-xl w-full max-w-md border border-gray-100">
        <div className="flex justify-center mb-6 text-blue-600"><Lock size={48} /></div>
        <h2 className="text-3xl font-black text-center mb-2">Admin Access</h2>
        <p className="text-center text-gray-400 font-bold text-xs uppercase tracking-widest mb-8">Nacre Dentals Internal</p>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" placeholder="Username" className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl font-bold focus:ring-2 focus:ring-blue-600 outline-none" 
                   value={creds.username} onChange={e => setCreds({...creds, username: e.target.value})} />
          </div>
          <div className="relative">
            <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="password" placeholder="Password" className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl font-bold focus:ring-2 focus:ring-blue-600 outline-none" 
                   value={creds.password} onChange={e => setCreds({...creds, password: e.target.value})} />
          </div>
          {error && <p className="text-red-500 font-bold text-center text-sm">{error}</p>}
          <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all">Secure Login</button>
        </form>
        <div className="mt-6 text-center">
           <a href="/" className="text-gray-400 font-bold text-sm hover:text-blue-600">Back to Website</a>
        </div>
      </div>
    </div>
  );
}