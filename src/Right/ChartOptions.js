import { kFormatter } from '../helpers';
export default {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: true,
  tooltips: {
    mode: 'index',
    intersect: false,
    callbacks: {
      label: (tooltipItem, data) => kFormatter(tooltipItem.value),
    },
  },
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          format: 'MM/DD/YY',
          tooltipFormat: 'll',
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: (value) => kFormatter(value),
        },
      },
    ],
  },
};
