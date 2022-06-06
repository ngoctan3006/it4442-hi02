import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import LoginPage from './features/auth/LoginPage';
import Analyse from './pages/Analyse';
import Assign from './pages/Assign';
import HomePage from './pages/HomePage';
import KpiManagement from './pages/KpiManagement';
import NotFound from './pages/NotFound';
import Report from './pages/Report';
import Personnel from './pages/Personnel';

function App() {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="assign" element={<Assign />} />
          <Route path="report" element={<Report />} />
          <Route path="analyse" element={<Analyse />} />
          <Route path="kpi-management" element={<KpiManagement />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
