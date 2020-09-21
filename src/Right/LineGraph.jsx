import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useStateValue } from '../store/StateProvider';
import { SET_LINE_CHART_DATA } from '../store/types';
import chartOptions from './ChartOptions';
import colors from '../Left/MapNdChartColors';

const LineGraph = ({ lastdays = 180 }) => {
  const [{ lineChartData, selectedCard }, dispatch] = useStateValue();

  const url = `https://disease.sh/v3/covid-19/historical/all?lastdays=${lastdays}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch({ type: SET_LINE_CHART_DATA, payload: data }));
  }, []);

  const { cases, recovered, deaths } = lineChartData;

  const formatData = (data) => {
    let res = [];
    for (let d in data) {
      res.push({ x: d, y: data[d] });
    }
    return res;
  };

  return (
    <div>
      <Line
        data={{
          datasets: [
            {
              data: formatData(lineChartData[selectedCard]),
              backgroundColor: colors[selectedCard].rgba,
              borderColor: colors[selectedCard].hex,
            },
          ],
        }}
        options={chartOptions}
      />
    </div>
  );
};

export default LineGraph;
