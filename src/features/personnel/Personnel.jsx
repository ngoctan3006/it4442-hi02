import { PlusOutlined } from '@ant-design/icons';
import { Button, Space, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectPage, selectPersonnel, selectTotal } from './personnelSlice';

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
          <Button type="primary">Chỉnh sửa</Button>
          <Button danger>Xóa</Button>
        </Space>
      ),
    },
  ];

  const users = useSelector(selectPersonnel);
  const loading = useSelector(selectLoading);
  const page = useSelector(selectPage);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="page-hearder">Nhân sự</h2>

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
        pagination={{ current: page, total }}
        columns={columns}
        dataSource={
          users.length
            ? users.map((item, index) => ({
                ...item,
                key: item.id,
                index: index + 10 * (page - 1) + 1,
              }))
            : []
        }
      />
    </div>
  );
};

export default Personnel;
