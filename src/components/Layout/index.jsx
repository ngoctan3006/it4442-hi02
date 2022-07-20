import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import TopNav from '../TopNav';
import './layout.css';

const Layout = ({ sidebarItems }) => {
  return (
    <div className="layout">
      <Sidebar sidebarItems={sidebarItems} />
      <div className="layout__content">
        <TopNav />
        <div className="layout__content-main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
