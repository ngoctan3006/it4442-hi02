import user_image from '../../assets/images/avatar.jpg';
import Dropdown from '../Dropdown/Dropdown';
import './topnav.css';

const curr_user = {
  name: 'Admin',
  image: user_image,
};

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="avatar" />
    </div>

    <div className="topnav__right-user__name">{user.name}</div>
  </div>
);

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Tìm kiếm..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown customToggle={() => renderUserToggle(curr_user)} />
        </div>
        <div className="topnav__right-item">
          <Dropdown icon="bx bx-bell" badge="0" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
