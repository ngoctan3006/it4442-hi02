import { PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Modal, Select, Space, Table } from 'antd';
import moment from 'moment';
import { useState } from 'react';

const columns = [
  {
    title: 'Công việc',
    dataIndex: 'name',
  },
  {
    title: 'Nội dung công việc',
    dataIndex: 'description',
  },
  {
    title: 'Thời gian',
    dataIndex: 'time',
  },
  {
    title: 'Nhóm',
    dataIndex: 'group',
  },
  {
    title: 'Thao tác',
    key: 'action',
    sorter: true,
    render: () => (
      <Space size="middle">
        <Button type="primary">Chỉnh sửa</Button>
        <Button danger>Xóa</Button>
      </Space>
    ),
  },
];
const data = [];

for (let i = 1; i <= 20; i++) {
  data.push({
    key: i,
    name: `Công việc ${i}`,
    description: `Nội dung công việc ${i}`,
    group: `Nhóm ${((i - 1) % 4) + 1}`,
    time: '11/06/2022 - 15/06/2022',
  });
}

const Assign = () => {
  const [loading, setLoading] = useState(false);
  const [rowSelection, setRowSelection] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  // const [ellipsis, setEllipsis] = useState(false);
  // const tableColumns = columns.map((item) => ({ ...item, ellipsis }));

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  const disabledDate = (current) => {
    return current && current < moment().endOf('day');
  };

  return (
    <div>
      <h2 className="page-header">Danh sách công việc</h2>
      <Button
        icon={<PlusOutlined />}
        type="primary"
        style={{ marginBottom: '16px' }}
        onClick={showModal}
      >
        Thêm công việc
      </Button>
      <Modal
        title="Thêm công việc"
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
          <Form.Item label="Tên công việc">
            <Input name="name" />
          </Form.Item>
          <Form.Item label="Nội dung công việc">
            <Input.TextArea name="description" row={4} />
          </Form.Item>
          <Form.Item label="Nhóm">
            <Select>
              <Select.Option value={1}>Nhóm 1</Select.Option>
              <Select.Option value={2}>Nhóm 2</Select.Option>
              <Select.Option value={3}>Nhóm 3</Select.Option>
              <Select.Option value={4}>Nhóm 4</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Thời gian">
            <DatePicker.RangePicker
              popupStyle={{ width: 'auto' }}
              format="DD/MM/YYYY"
              disabledDate={disabledDate}
            />
          </Form.Item>
        </Form>
      </Modal>

      <Table
        loading={loading}
        size="large"
        bordered
        rowSelection={rowSelection}
        pagination
        columns={columns}
        dataSource={data.length ? data : []}
      />
    </div>
  );
};

export default Assign;
