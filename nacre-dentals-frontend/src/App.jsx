import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import PublicWebsite from './components/PublicWebsite';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';

// Configuration
const API_URL = 'http://localhost:8080/api/appointments';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
        <Routes>
          {/* Main User-Facing Website */}
          <Route path="/" element={<PublicWebsite API_URL={API_URL} />} />

          {/* Admin Authentication Page */}
          <Route path="/login" element={<AdminLogin />} />

          {/* Protected Admin Dashboard */}
          <Route path="/admin" element={<AdminPanel API_URL={API_URL} />} />

          {/* Catch-all: Redirect any broken links back to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}