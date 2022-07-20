import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './sidebar.css';

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

const Sidebar = ({ sidebarItems }) => {
  const location = useLocation();
  const active = sidebarItems.findIndex((item) => item.path === location.pathname);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Link to="/">
          <img style={{ width: '250px' }} src={logo} alt="Logo" />
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
