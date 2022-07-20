import { UserOutlined } from '@ant-design/icons';
import { Avatar, Form, Input, Layout } from 'antd';
import React from 'react';

const roles = ['Nông dân', 'Trưởng nhóm', 'Quản trị viên'];

const Info = ({ user }) => {
  return (
    <Layout style={{ background: 'transparent' }}>
      <Layout.Sider
        style={{
          background: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Avatar shape="square" size={140} icon={<UserOutlined />} />
      </Layout.Sider>
      <Layout.Content>
        <Form
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          layout="horizontal"
        >
          <Form.Item label="Họ và tên">
            <Input value={user?.name} />
          </Form.Item>
          <Form.Item label="Nhóm">
            <Input value={user?.group} />
          </Form.Item>
          <Form.Item label="Chức vụ">
            <Input value={roles[user?.role]} />
          </Form.Item>
          <Form.Item label="Công việc đã hoàn thành">
            <Input value={user?.done} />
          </Form.Item>
          <Form.Item label="Công việc đang làm">
            <Input value={user?.processing} />
          </Form.Item>
          <Form.Item label="Công việc đã hủy">
            <Input value={user?.exception} />
          </Form.Item>
        </Form>
      </Layout.Content>
    </Layout>
  );
};

export default Info;
