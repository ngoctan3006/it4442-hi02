import { DeleteOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Select, Space, Table, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Info from '../../components/Info';
import { roles } from '../../constants';
import { getUsers, selectLoading, selectPagination, selectPersonnel } from './personnelSlice';

const initState = {
  fullname: '',
  role: '',
  group: '',
};

const Personnel = () => {
  const columns = [
    {
      title: 'STT',
      dataIndex: 'index',
    },
    {
      title: 'Họ và tên',
      dataIndex: 'name',
    },
    {
      title: 'Nhóm',
      dataIndex: 'group',
      sorter: (a, b) => a.group - b.group,
    },
    {
      title: 'Chức vụ',
      dataIndex: 'role',
    },
    {
      title: 'Đã hoàn thành',
      dataIndex: 'done',
    },
    {
      title: 'Đang làm',
      dataIndex: 'processing',
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => showModalInfo(record.id)} icon={<EyeOutlined />} size="small">
            Xem thông tin
          </Button>
          <Button icon={<DeleteOutlined />} size="small" danger>
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  const users = useSelector(selectPersonnel);
  const loading = useSelector(selectLoading);
  const pagination = useSelector(selectPagination);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState(initState);
  const [isModalInfoVisible, setIsModalInfoVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showModalInfo = (id) => {
    setIsModalInfoVisible(true);
    setCurrentUser(id);
  };

  const handleOk = () => {};

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleInfoCancel = () => {
    setIsModalInfoVisible(false);
  };

  useEffect(() => {
    dispatch(getUsers(pagination));
  }, []);

  return (
    <div>
      <Typography.Title style={{ marginBottom: 36 }} level={3}>
        Nhân Sự
      </Typography.Title>

      <Button
        icon={<PlusOutlined />}
        type="primary"
        style={{ marginBottom: '16px' }}
        onClick={showModal}
      >
        Thêm người mới
      </Button>

      <Modal
        title="Thêm người mới"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
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
            <Input
              name="fullname"
              value={formData.fullname}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="Nhóm">
            <Select
              value={formData.group}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  group: e,
                })
              }
            >
              <Select.Option value={'1'}>Nhóm 1</Select.Option>
              <Select.Option value={'2'}>Nhóm 2</Select.Option>
              <Select.Option value={'3'}>Nhóm 3</Select.Option>
              <Select.Option value={'4'}>Nhóm 4</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Chức vụ">
            <Select
              value={formData.role}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  role: e,
                })
              }
            >
              <Select.Option value={1}>Nông dân</Select.Option>
              <Select.Option value={2}>Trưởng nhóm</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Thông tin cá nhân"
        visible={isModalInfoVisible}
        width={'60%'}
        footer={null}
        onCancel={handleInfoCancel}
      >
        <Info user={users.find((item) => item.id === currentUser)} />
      </Modal>

      <Table
        loading={loading}
        size="large"
        bordered
        pagination={pagination}
        columns={columns}
        dataSource={
          users.length
            ? users.map((item, index) => ({
                ...item,
                key: item.id,
                index: index + 10 * (pagination.current - 1) + 1,
                role: roles[item.role],
              }))
            : []
        }
      />
    </div>
  );
};

export default Personnel;
