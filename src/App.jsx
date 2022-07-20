import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import TimeKeeping from './components/TimeKeeping';
import Work from './components/Work';
import Assign from './features/assign/Assign';
import LoginPage from './features/auth/LoginPage';
import Personnel from './features/personnel/Personnel';
import HomePage from './pages/HomePage';
import KpiManagement from './pages/KpiManagement';
import NotFound from './pages/NotFound';

const sidebarItems = [
  {
    name: 'Trang chủ',
    path: '/admin',
    icon: 'bx bx-home-alt',
  },
  {
    name: 'Giao việc',
    path: '/admin/assign',
    icon: 'bx bx-spreadsheet',
  },
  {
    name: 'Nhân sự',
    path: '/admin/personnel',
    icon: 'bx bxs-user-detail',
  },
  {
    name: 'Quản lí KPI',
    path: '/admin/kpi-management',
    icon: 'bx bxs-bar-chart-alt-2',
  },
];

const sidebarFarmer = [
  {
    name: 'Trang chủ',
    path: '/',
    icon: 'bx bx-home-alt',
  },
  {
    name: 'Chấm công',
    path: '/time-keeping',
    icon: 'bx bx-spreadsheet',
  },
];

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Layout sidebarItems={sidebarItems} />}>
        <Route index element={<HomePage />} />
        <Route path="assign" element={<Assign />} />
        <Route path="personnel" element={<Personnel />} />
        <Route path="kpi-management" element={<KpiManagement />} />
      </Route>
      <Route path="/" element={<Layout sidebarItems={sidebarFarmer} />}>
        <Route index element={<Work />} />
        <Route path="time-keeping" element={<TimeKeeping />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
