import { Col, Progress, Row, Table, Typography } from 'antd';
import moment from 'moment';
import { useEffect } from 'react';
import Chart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import StatusCard from '../components/StatusCard';
import { roles } from '../constants';
import {
  getWorks,
  selectLoading as selectAssignLoading,
  selectWorks,
} from '../features/assign/assignSlice';
import {
  getUsers,
  selectLoading as selectPersonnelLoading,
  selectPersonnel,
} from '../features/personnel/personnelSlice';

const statusCards = [
  {
    icon: 'bx bx-home-alt',
    count: '500',
    title: 'tổng công việc',
  },
  {
    icon: 'bx bx-home-alt',
    count: '421',
    title: 'số lượng nông dân',
  },
  {
    icon: 'bx bx-home-alt',
    count: '350',
    title: 'đã hoàn thành',
  },
  {
    icon: 'bx bx-home-alt',
    count: '150',
    title: 'chưa hoàn thành',
  },
];

const chartOptions = {
  series: [
    {
      name: 'Công việc đã hoàn thành',
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60, 20, 30, 50],
    },
    {
      name: 'Công việc chưa hoàn thành',
      data: [40, 30, 70, 50, 40, 16, 40, 20, 51, 10, 50, 20],
    },
  ],
  options: {
    chart: {
      background: 'transparent',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    legend: {
      position: 'top',
    },
    grid: {
      show: false,
    },
  },
};

const assignColumns = [
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
    title: 'Nhóm',
    dataIndex: 'group',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    render: (text) => <Progress status={text.text} percent={text.percent} />,
  },
];

const personnelColumns = [
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
  },
  {
    title: 'Chức vụ',
    dataIndex: 'role',
  },
];

const HomePage = () => {
  const works = useSelector(selectWorks);
  const assignLoading = useSelector(selectAssignLoading);
  const users = useSelector(selectPersonnel);
  const personnelLoading = useSelector(selectPersonnelLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getWorks());
  }, []);

  return (
    <div>
      <Typography.Title style={{ marginBottom: 36 }} level={3}>
        Trang chủ
      </Typography.Title>
      <Row gutter={30}>
        <Col span={12}>
          <Row gutter={30}>
            {statusCards.map((item, index) => (
              <Col span={12} key={index}>
                <StatusCard icon={item.icon} count={item.count} title={item.title} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={12}>
          <div className="card full-height">
            <Chart
              options={chartOptions.options}
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="card">
            <div className="card__header">
              <h3>top nông dân</h3>
            </div>
            <div className="card__body">
              <Table
                loading={personnelLoading}
                size="small"
                pagination={false}
                columns={personnelColumns}
                dataSource={
                  users.length
                    ? users
                        .map((item, index) => ({
                          ...item,
                          key: item.id,
                          index: index + 1,
                          role: roles[item.role],
                        }))
                        .slice(0, 5)
                    : []
                }
              />
            </div>
            <div className="card__footer">
              <Link to="/personnel">view all</Link>
            </div>
          </div>
        </Col>
        <Col span={16}>
          <div className="card">
            <div className="card__header">
              <h3>công việc gần đây</h3>
            </div>
            <div className="card__body">
              <Table
                loading={assignLoading}
                size="small"
                pagination={false}
                columns={assignColumns}
                dataSource={
                  works.length
                    ? works
                        .map((item, index) => ({
                          ...item,
                          index: index + 1,
                          key: item.id,
                          start: `${moment(item.start).format('DD/MM/YYYY')}`,
                          end: `${moment(item.end).format('DD/MM/YYYY')}`,
                        }))
                        .slice(0, 5)
                    : []
                }
              />
            </div>
            <div className="card__footer">
              <Link to="/assign">view all</Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
