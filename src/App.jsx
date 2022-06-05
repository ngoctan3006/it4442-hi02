import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LoginPage from './features/auth/LoginPage';
import Analyse from './pages/Analyse';
import Assign from './pages/assign/Assign';
import HomePage from './pages/HomePage';
import KpiManagement from './pages/KpiManagement';
import Report from './pages/Report';
import Personnel from './pages/Personnel';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="assign" element={<Assign />} />
        <Route path="personnel" element={<Personnel />} />
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
