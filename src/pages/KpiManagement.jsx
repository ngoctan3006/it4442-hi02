import { Col, Row, Typography } from 'antd';
import Chart from 'react-apexcharts';

const chartDonutOptions = {
  series: [40, 20, 10, 30],
  options: {
    labels: ['Chưa bắt đầu', 'Muộn', 'Chưa hoàn thành', 'Đã hoàn thành'],
    title: {
      text: 'Thống kê KPI',
      align: 'center',
    },
  },
};

const chartBarOptions = {
  series: [
    {
      name: 'Chưa hoàn thành',
      data: [18, 15, 12, 14],
    },
    {
      name: 'Đã hoàn thành',
      data: [10, 8, 11, 15],
    },
  ],
  options: {
    chart: {
      type: 'bar',
      stacked: true,
      stackType: '100%',
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff'],
    },
    xaxis: {
      type: 'text',
      categories: ['Nhóm 1', 'Nhóm 2', 'Nhóm 3', 'Nhóm 4'],
    },
    legend: {
      position: 'right',
      offsetY: 40,
    },
    title: {
      text: 'KPI theo nhóm',
      align: 'center',
    },
  },
};

const chartStyles = {
  backgroundColor: '#fff',
  padding: '16px',
};

const KpiManagement = () => {
  return (
    <div>
      <Typography.Title style={{ marginBottom: 36 }} level={3}>
        Quản Lý KPI
      </Typography.Title>
      <Row gutter={30}>
        <Col span={12}>
          <div style={chartStyles}>
            <Chart
              options={chartDonutOptions.options}
              series={chartDonutOptions.series}
              type="donut"
              width="100%"
            />
          </div>
        </Col>
        <Col span={12}>
          <div style={chartStyles}>
            <Chart
              options={chartBarOptions.options}
              series={chartBarOptions.series}
              type="bar"
              width="100%"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default KpiManagement;
