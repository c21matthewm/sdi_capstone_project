import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { userContext } from '../App';
import "./Satellite.css"

export function Chart({ xdata, seriesData }) {
  // const location = useLocation();
  // const { sat } = location.state;
  // const { reports } = useContext(userContext)

return (
  <>
    {seriesData &&
    <LineChart className="chart"
      xAxis={[{ data: xdata, label: 'Month', scaleType: 'band' }]}
      series={[
        {
          // curve: "linear",
          data: seriesData,
          label: 'Number of Reports per Month',
          color: '#fdb462'
        },
      ]}
      width={500}
      height={300}
    />}
  </>
);
}