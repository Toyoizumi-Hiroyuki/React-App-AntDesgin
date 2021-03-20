import echarts from 'echarts';

import { primaryColor, successColor, warningColor, errorColor } from './theme';

export const color = [primaryColor, successColor, warningColor, errorColor];

export const fontFamily = "'Roboto','Noto Sans JP', sans-serif";
const textStyle = {
  fontFamily,
  color: '#666',
};

const axisCommon = {
  axisLine: {
    lineStyle: {
      color: '#eeeeee',
    },
  },
  axisLabel: {
    textStyle: {
      ...textStyle,
    },
  },
  splitLine: {
    show: true,
    lineStyle: {
      type: 'dashed',
      color: '#eeeeee',
    },
  },
};

echarts.registerTheme('vls', {
  color,
  backgroundColor: '#fff',
  // textStyle,
  grid: {
    borderColor: '#eeeeee',
  },
  legend: {
    textStyle: {
      ...textStyle,
    },
  },
  tooltip: {
    textStyle: {
      ...textStyle,
      color: '#fff',
    },
  },
  visualMap: {
    textStyle: { ...textStyle },
  },
  valueAxis: { ...axisCommon },
  categoryAxis: { ...axisCommon },
  graph: {
    color,
  },
  line: {
    smooth: false,
    symbol: 'emptyCircle',
    symbolSize: 6,
  },
});
