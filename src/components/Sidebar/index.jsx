import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';

const sidebarItems = [
  {
    name: 'Trang chủ',
    path: '/',
    icon: 'bx bx-home-alt',
  },
  {
    name: 'Giao việc',
    path: '/assign',
    icon: 'bx bx-spreadsheet',
  },
  {
    name: 'Nhân sự',
    path: '/personnel',
    icon: 'bx bxs-user-detail',
  },
  {
    name: 'Báo cáo',
    path: '/report',
    icon: 'bx bxs-report',
  },
  {
    name: 'Thống kê',
    path: '/analyse',
    icon: 'bx bx-analyse',
  },
  {
    name: 'Quản lí KPI',
    path: '/kpi-management',
    icon: 'bx bxs-bar-chart-alt-2',
  },
];

const SidebarItem = (props) => {
  const active = props.active ? 'active' : '';
  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const active = sidebarItems.findIndex((item) => item.path === location.pathname);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Link to="/">
          <h2>HappyFarm</h2>
        </Link>
      </div>
      {sidebarItems.map((item, index) => (
        <Link to={item.path} key={index}>
          <SidebarItem title={item.name} icon={item.icon} active={index === active} />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
