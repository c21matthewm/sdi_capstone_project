import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import "./Satellite.css"

export function Chart({ xdata, seriesData }) {

return (
  <>
    {seriesData &&
    <LineChart className="chart"
      xAxis={[{ data: xdata, label: 'Month', scaleType: 'band' }]}
      series={[
        {
          data: seriesData,
          label: 'Number of Reports per Month',
          color: '#fdb462'
        },
      ]}
      // width={500}
      // height={300}
    />}
  </>
);
}