import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Space, Table, Typography } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { roles } from '../../constants';
import { getUsers, selectLoading, selectPagination, selectPersonnel } from './personnelSlice';

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
      title: 'Thao tác',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Button icon={<EyeOutlined />} size="small">
            Xem thông tin
          </Button>
          <Button icon={<EditOutlined />} size="small" type="primary">
            Chỉnh sửa
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
        // onClick={showModal}
      >
        Thêm người mới
      </Button>

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
