import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
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
      name: 'Đã hoàn thành',
      data: [10, 8, 11, 15],
    },
    {
      name: 'Chưa hoàn thành',
      data: [18, 15, 12, 14],
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
      categories: ['Team 1', 'Team 2', 'Team 3', 'Team 4'],
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

const useStyles = makeStyles({
  chart: {
    backgroundColor: '#fff',
    padding: '30px',
  },
});

const KpiManagement = () => {
  const classes = useStyles();

  return (
    <div>
      <h2 className="page-header">Quản lý KPI</h2>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Box className={classes.chart}>
            <Chart
              options={chartDonutOptions.options}
              series={chartDonutOptions.series}
              type="donut"
              width="100%"
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.chart}>
            <Chart
              options={chartBarOptions.options}
              series={chartBarOptions.series}
              type="bar"
              width="100%"
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default KpiManagement;
