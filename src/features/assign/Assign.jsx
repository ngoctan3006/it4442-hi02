import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Progress,
  Select,
  Slider,
  Space,
  Table,
  Tag,
} from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createWork,
  deleteWork,
  getWorks,
  selectLoading,
  selectPagination,
  selectWorks,
  updateWork,
} from './assignSlice';

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

const Assign = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentWork, setCurrentWork] = useState(undefined);
  const [formData, setFormData] = useState(initState);
  const works = useSelector(selectWorks);
  const loading = useSelector(selectLoading);
  const pagination = useSelector(selectPagination);
  const dispatch = useDispatch();

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
      sorter: (a, b) => a - b,
    },
    {
      title: 'Ngày kết thúc',
      dataIndex: 'end',
      sorter: (a, b) => a - b,
    },
    {
      title: 'Nhóm',
      dataIndex: 'group',
      sorter: (a, b) => a.group - b.group,
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
          <Button
            size="small"
            onClick={() => {
              setCurrentWork(record.id);
              showModal();
            }}
            type="primary"
          >
            Chỉnh sửa
          </Button>
          <Button size="small" onClick={() => dispatch(deleteWork(record.id))} danger>
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getWorks());
  }, []);

  useEffect(() => {
    if (currentWork) setFormData(works.find((item) => item.id === currentWork));
    else setFormData(initState);
  }, [currentWork]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (currentWork) {
      dispatch(updateWork(currentWork, formData));
    } else {
      dispatch(createWork(formData));
    }
    handleReset();
  };

  const handleReset = () => {
    setCurrentWork(undefined);
    setFormData(initState);
    setIsModalVisible(false);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
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
        title={`${currentWork ? 'Chỉnh sửa ' : 'Thêm '} công việc`}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleReset}
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
            <Input name="name" value={formData.name} onChange={handleChange} />
          </Form.Item>
          <Form.Item label="Nội dung công việc">
            <Input.TextArea
              name="description"
              row={4}
              value={formData.description}
              onChange={handleChange}
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
          {currentWork ? (
            <>
              <Form.Item label="Trạng thái">
                <Select
                  value={formData.status.text}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: {
                        ...formData.status,
                        text: e,
                      },
                    })
                  }
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
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: {
                        ...formData.status,
                        percent: e,
                      },
                    })
                  }
                  tipFormatter={(value) => `${value}%`}
                />
              </Form.Item>
            </>
          ) : (
            ''
          )}
          <Form.Item label="Thời gian">
            <DatePicker.RangePicker
              popupStyle={{ width: 'auto' }}
              format="DD/MM/YYYY"
              value={
                formData.start && formData.end
                  ? [moment(formData.start), moment(formData.end)]
                  : null
              }
              onChange={(e) => {
                if (e) {
                  setFormData({
                    ...formData,
                    start: moment(e[0]._d).format('YYYY-MM-DD'),
                    end: moment(e[1]._d).format('YYYY-MM-DD'),
                  });
                } else {
                  setFormData({
                    ...formData,
                    start: '',
                    end: '',
                  });
                }
              }}
            />
          </Form.Item>
        </Form>
      </Modal>

      <Table
        loading={loading}
        size="large"
        bordered
        pagination={pagination}
        columns={columns}
        dataSource={
          works.length
            ? works.map((item, index) => ({
                ...item,
                index: index + 10 * (pagination.current - 1) + 1,
                key: item.id,
                start: `${moment(item.start).format('DD/MM/YYYY')}`,
                end: `${moment(item.end).format('DD/MM/YYYY')}`,
              }))
            : []
        }
      />
    </div>
  );
};

export default Assign;
