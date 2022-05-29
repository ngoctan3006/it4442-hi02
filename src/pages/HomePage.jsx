import React from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge/Badge';
import StatusCard from '../components/StatusCard/StatusCard';
import Table from '../components/Table/Table';

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

const topFarmers = {
  head: ['họ tên', 'hoàn thành', 'chưa hoàn thành'],
  body: [
    {
      name: 'nguyễn thị hồng ngọc',
      finished: 40,
      unfinished: 10,
    },
    {
      name: 'nguyễn thùy trang',
      finished: 35,
      unfinished: 5,
    },
    {
      name: 'nguyễn văn dũng',
      finished: 32,
      unfinished: 8,
    },
    {
      name: 'nguyễn mạnh cường',
      finished: 25,
      unfinished: 15,
    },
    {
      name: 'trần văn hải',
      finished: 20,
      unfinished: 20,
    },
  ],
};

const latestWorks = {
  header: ['id', 'tên công việc', 'thời gian', 'nhóm', 'trạng thái'],
  body: [
    {
      id: '#CV5',
      name: 'công việc 5',
      date: '21 May 2022',
      group: 'nhóm 3',
      status: 'unassigned',
    },
    {
      id: '#CV4',
      name: 'công việc 4',
      date: '20 May 2022',
      group: 'nhóm 1',
      status: 'unfinished',
    },
    {
      id: '#CV3',
      name: 'công việc 3',
      date: '19 May 2022',
      group: 'nhóm 1',
      status: 'cancel',
    },
    {
      id: '#CV2',
      name: 'công việc 2',
      date: '18 May 2022',
      group: 'nhóm 5',
      status: 'unfinished',
    },
    {
      id: '#CV1',
      name: 'công việc 1',
      date: '17 May 2022',
      group: 'nhóm 7',
      status: 'finished',
    },
  ],
};

const orderStatus = {
  finished: 'success',
  unassigned: 'primary',
  unfinished: 'warning',
  cancel: 'danger',
};

const renderCusomerHead = (item, index) => <th key={index}>{item}</th>;

const renderCusomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.name}</td>
    <td style={{ textAlign: 'center' }}>{item.finished}</td>
    <td style={{ textAlign: 'center' }}>{item.unfinished}</td>
  </tr>
);

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.date}</td>
    <td>{item.group}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);

const HomePage = () => {
  return (
    <div>
      <h2 className="page-header">Trang chủ</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard icon={item.icon} count={item.count} title={item.title} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <div className="card full-height">
            <Chart
              options={chartOptions.options}
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h3>top nông dân</h3>
            </div>
            <div className="card__body">
              <Table
                headData={topFarmers.head}
                renderHead={(item, index) => renderCusomerHead(item, index)}
                bodyData={topFarmers.body}
                renderBody={(item, index) => renderCusomerBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card__header">
              <h3>công việc gần đây</h3>
            </div>
            <div className="card__body">
              <Table
                headData={latestWorks.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={latestWorks.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
