import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LoginPage from './features/auth/LoginPage';
import Analyse from './pages/Analyse';
import HomePage from './pages/HomePage';
import KpiManagement from './pages/KpiManagement';
import Report from './pages/Report';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="report" element={<Report />} />
        <Route path="analyse" element={<Analyse />} />
        <Route path="kpi-management" element={<KpiManagement />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Layout />} />
    </Routes>
  );
}

export default App;
