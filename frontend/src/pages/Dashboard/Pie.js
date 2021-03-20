/* eslint-disable react/prop-types */
import React from 'react';
import ReactEcharts from 'echarts-for-react';

const option = {
  legend: {
    orient: 'vertical',
    left: 10,
    data: ['Javascript', 'Vue.js', 'kintone', 'Qiita'],
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center',
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold',
          },
        },
      },
      labelLine: {
        normal: {
          show: false,
        },
      },
      data: [
        { name: 'Javascript', value: 15 },
        { name: 'Vue.js', value: 6 },
        { name: 'kintone', value: 4 },
        { name: 'Qiita', value: 3 },
      ],
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
