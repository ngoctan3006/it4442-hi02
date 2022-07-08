import { BellOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Dropdown, Menu, Typography } from 'antd';
import './topnav.css';

const user = {
  name: 'Nguyễn Ngọc Tân',
};

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: <Button icon={<UserOutlined />}>Profile</Button>,
      },
      {
        key: '2',
        label: <Button icon={<LogoutOutlined />}>Logout</Button>,
      },
    ]}
  />
);

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        {/* <input type="text" placeholder="Tìm kiếm..." />
        <i className="bx bx-search"></i> */}
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown overlay={menu} placement="bottomRight" trigger={['click']} arrow>
            <div style={{ display: 'flex' }}>
              <Avatar
                size={32}
                style={{
                  color: '#f56a00',
                  backgroundColor: '#fde3cf',
                }}
              >
                {user.name.split(' ').slice(-1)[0][0]}
              </Avatar>
              <Typography.Title style={{ margin: 'auto 0 auto 8px' }} level={5}>
                {user.name.split(' ').slice(-1)[0]}
              </Typography.Title>
            </div>
          </Dropdown>
        </div>
        <div className="topnav__right-item">
          <Badge count={1}>
            <Button shape="circle" size="large" icon={<BellOutlined />} />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
