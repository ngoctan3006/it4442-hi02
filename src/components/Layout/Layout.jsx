import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import TopNav from '../TopNav/TopNav';
import './layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
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
