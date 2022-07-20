import {
  Button,
  Form,
  Input,
  Modal,
  Progress,
  Select,
  Slider,
  Space,
  Table,
  Tag,
  Typography,
} from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

const works = [
  {
    name: 'Diệt sâu, bệnh',
    description: 'Phun thuốc trừ sâu diệt sâu, sử dụng thuốc trừ sâu',
    start: '2022-07-19',
    end: '2022-07-21',
    status: {
      text: 'processing',
      percent: 60,
    },
    id: 2,
  },
  {
    name: 'Bón phân',
    description: 'Sử dụng phân bón NPK...',
    start: '2022-05-06',
    end: '2022-05-09',
    status: {
      text: 'success',
      percent: 100,
    },
    id: 3,
  },
  {
    name: 'Dọn cây cỏ',
    description: 'Dọn sạch các cây cỏ hoang',
    start: '2022-06-25',
    end: '2022-06-27',
    status: {
      text: 'processing',
      percent: 80,
    },
    id: 4,
  },
  {
    name: 'Trồng cây',
    description: 'Trồng cây ở vườn táo',
    start: '2022-06-26',
    end: '2022-06-27',
    status: {
      text: 'processing',
      percent: 60,
    },
    id: 5,
  },
  {
    name: 'Bón phân lót',
    description: 'Bón phân lót cho vườn táo',
    start: '2022-06-25',
    end: '2022-06-25',
    status: {
      text: 'success',
      percent: 100,
    },
    id: 6,
  },
];

const status = {
  success: 'Hoàn thành',
  processing: 'Đang làm',
  exception: 'Muộn',
};

const initState = {
  name: '',
  description: '',
  start: '',
  end: '',
  status: { text: 'processing', percent: 0 },
  group: '',
};

const Work = () => {
  const columns = [
    {
      title: 'STT',
      dataIndex: 'index',
    },
    {
      title: 'Công việc',
      dataIndex: 'name',
    },
    {
      title: 'Nội dung công việc',
      dataIndex: 'description',
    },
    {
      title: 'Ngày bắt đầu',
      dataIndex: 'start',
    },
    {
      title: 'Ngày kết thúc',
      dataIndex: 'end',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      render: (text) => <Progress status={text.text} percent={text.percent} />,
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => showModal(record)} size="small" type="primary">
            Chỉnh sửa
          </Button>
        </Space>
      ),
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentWork, setCurrentWork] = useState(undefined);
  const [formData, setFormData] = useState(initState);

  const showModal = (record) => {
    setCurrentWork(record);
    setIsModalVisible(true);
  };

  const handleOk = () => {};

  const handleCancel = () => {
    setCurrentWork(undefined);
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (currentWork) setFormData(currentWork);
    else setFormData(initState);
  }, [currentWork]);

  return (
    <div>
      <Typography.Title style={{ marginBottom: 36 }} level={3}>
        Danh Sách Công Việc
      </Typography.Title>
      <Table
        size="large"
        bordered
        pagination
        columns={columns}
        dataSource={
          works.length
            ? works.map((item, index) => ({
                ...item,
                index: index + 1,
                key: item.id,
                start: `${moment(item.start).format('DD/MM/YYYY')}`,
                end: `${moment(item.end).format('DD/MM/YYYY')}`,
              }))
            : []
        }
      />

      <Modal
        title={`${currentWork ? 'Chỉnh sửa ' : 'Thêm '} công việc`}
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
            <Input name="name" value={formData.name} />
          </Form.Item>
          {currentWork ? (
            <>
              <Form.Item label="Trạng thái">
                <Select
                  value={formData.status.text}
                  onChange={(e) => {
                    if (e === 'success') {
                      setFormData({
                        ...formData,
                        status: {
                          text: e,
                          percent: 100,
                        },
                      });
                    } else {
                      setFormData({
                        ...formData,
                        status: {
                          ...formData.status,
                          text: e,
                        },
                      });
                    }
                  }}
                >
                  <Select.Option value={'success'}>
                    <Tag color={'success'}>{status['success']}</Tag>
                  </Select.Option>
                  <Select.Option value={'processing'}>
                    <Tag color={'processing'}>{status['processing']}</Tag>
                  </Select.Option>
                  <Select.Option value={'exception'}>
                    <Tag color={'error'}>{status['exception']}</Tag>
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Tiến độ công việc">
                <Slider
                  value={formData.status.percent}
                  step={10}
                  onChange={(e) => {
                    if (e === 100) {
                      setFormData({
                        ...formData,
                        status: {
                          text: 'success',
                          percent: e,
                        },
                      });
                    } else {
                      setFormData({
                        ...formData,
                        status: {
                          ...formData.status,
                          percent: e,
                        },
                      });
                    }
                  }}
                  tipFormatter={(value) => `${value}%`}
                />
              </Form.Item>
            </>
          ) : (
            ''
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default Work;
