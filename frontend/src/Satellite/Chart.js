import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { ChartsAxis } from '@mui/x-charts';

export function Chart() {
  return (
    <>
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          curve: "linear",
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />
    </>
  );
}