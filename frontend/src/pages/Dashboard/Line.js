/* eslint-disable react/prop-types */
import React from 'react';
import ReactEcharts from 'echarts-for-react';

const option = {
  grid: {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: [
      '2020-01-12',
      '2020-01-13',
      '2020-01-14',
      '2020-01-15',
      '2020-01-16',
      '2020-01-17',
      '2020-01-18',
      '2020-01-19',
      '2020-01-20',
      '2020-01-21',
      '2020-01-22',
      '2020-01-23',
      '2020-01-24',
      '2020-01-25',
      '2020-01-26',
      '2020-01-27',
      '2020-01-28',
      '2020-01-29',
      '2020-01-30',
      '2020-01-31',
      '2020-02-01',
      '2020-02-02',
      '2020-02-03',
      '2020-02-04',
      '2020-02-05',
      '2020-02-06',
      '2020-02-07',
      '2020-02-08',
      '2020-02-09',
      '2020-02-10',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [
        0,
        1,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        1,
        2,
        1,
        0,
        2,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        2,
        0,
        0,
        1,
        0,
        0,
      ],
      type: 'line',
    },
  ],
};

const LineChart = ({ height = 200 }) => {
  return (
    <ReactEcharts
      style={{ height }}
      option={option}
      notMerge
      lazyUpdate
      theme="vls"
    />
  );
};

export default LineChart;
