import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, LogOut, CheckCircle, Trash2 } from 'lucide-react';
import { checkAdminSession, clearAdminSession } from '../utils/session';

export default function AdminPanel({ API_URL }) {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // 1. Move function definition to the top of the effect
    const fetchAppointments = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setAppointments(data);
      } catch (err) { 
        console.error("API Error", err); 
      }
    };

    // 2. Check session first
    if (!checkAdminSession()) {
      navigate('/login');
    } else {
      // 3. Only call it here once the function is defined
      fetchAppointments(); 
    }
  }, [navigate, API_URL]);

  const handleLogout = () => {
    clearAdminSession();
    navigate('/login');
  };

  const updateStatus = async (id, status) => {
    try {
      await fetch(`${API_URL}/${id}`, { 
        method: 'PATCH', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({status}) 
      });
      // Instead of reload, you could call fetchAppointments again for better UX
      window.location.reload(); 
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  const deleteAppt = async (id) => {
    if(window.confirm("Are you sure you want to delete this record?")) {
      try {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        window.location.reload();
      } catch (err) {
        console.error("Delete failed", err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
            <ShieldCheck className="text-blue-600"/> Dashboard
          </h1>
          <div className="flex gap-4">
             <button onClick={() => navigate('/')} className="font-bold text-gray-500 hover:text-blue-600">View Site</button>
             <button onClick={handleLogout} className="bg-white px-6 py-2 rounded-xl border font-bold text-red-500 hover:bg-red-50 flex items-center gap-2 transition-all">
               <LogOut size={18}/> Logout
             </button>
          </div>
        </div>
        
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr className="text-xs font-black text-gray-400 uppercase tracking-widest">
                <th className="px-8 py-5">Patient</th>
                <th className="px-8 py-5">Service</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {appointments.length > 0 ? (
                appointments.map(a => (
                  <tr key={a.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-bold text-gray-900">{a.name}</div>
                      <div className="text-xs text-gray-400">{a.email}</div>
                    </td>
                    <td className="px-8 py-6 font-bold text-blue-600">{a.service}</td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                        a.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {a.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right space-x-3">
                      {a.status !== 'Confirmed' && (
                        <button 
                          onClick={() => updateStatus(a.id, 'Confirmed')} 
                          className="text-green-600 hover:scale-110 transition-transform"
                          title="Confirm Appointment"
                        >
                          <CheckCircle size={20}/>
                        </button>
                      )}
                      <button 
                        onClick={() => deleteAppt(a.id)} 
                        className="text-red-400 hover:text-red-600 hover:scale-110 transition-all"
                        title="Delete"
                      >
                        <Trash2 size={20}/>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-8 py-12 text-center text-gray-400 font-medium">
                    No appointments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}