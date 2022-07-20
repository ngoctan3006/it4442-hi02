import { Badge, Calendar, Typography } from 'antd';
import React from 'react';

const getListData = (value) => {
  let listData;

  if (value.month() <= 6)
    switch (value.date()) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 10:
      case 11:
      case 12:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        listData = [
          {
            type: 'success',
            content: 'Ca 1: Ok',
          },
          {
            type: 'success',
            content: 'Ca 2: Ok',
          },
        ];
        break;
      case 9:
      case 13:
      case 19:
        listData = [
          {
            type: 'error',
            content: 'Ca 1: Muộn',
          },
          {
            type: 'success',
            content: 'Ca 2: Ok',
          },
        ];
        break;
      case 20:
        listData = [
          {
            type: 'success',
            content: 'Ca 1: Ok',
          },
        ];
        break;
      default:
    }

  return listData || [];
};

const TimeKeeping = () => {
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <Typography.Title style={{ marginBottom: 36 }} level={3}>
        Chấm công
      </Typography.Title>

      <Calendar dateCellRender={dateCellRender} mode="month" />
    </div>
  );
};

export default TimeKeeping;
