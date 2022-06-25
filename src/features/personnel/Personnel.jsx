import { Button, Space, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectPage, selectPersonnel } from './personnelSlice';

const Personnel = () => {
  const columns = [
    {
      title: 'STT',
      dataIndex: 'index',
    },
    {
      title: 'Họ và tên',
      dataIndex: 'description',
    },
    {
      title: 'Nhóm',
      dataIndex: 'group',
      sorter: (a, b) => a.group - b.group,
    },
    {
      title: 'Chức vụ',
      dataIndex: 'time',
      sorter: (a, b) => a.time - b.time,
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
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="page-hearder">Nhân sự</h2>

      <Table
        loading={loading}
        size="large"
        bordered
        pagination
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
