import { BarChart } from '@mui/x-charts/BarChart';
import { userContext } from "../App";
import React, { useState, useEffect, useContext } from "react";


// Cannot Connect
// Quality is Degraded
// LOS
// Atmospheric Conditions
// Signal Interference
// Signal Latency
// Equipment Malfunction
// Power Supply Issues
// Frequency Coordination


const Garbled = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];

export default function MixedBarChart() {

  const{reports, satellites} = useContext(userContext);

  return (
    <BarChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'pv', stack: 'stack1' },
        { data: amtData, label: 'amt', stack:'stack1' },
        { data: Garbled, label: 'Garbled', stack: 'stack1' },
      ]}
      xAxis={[{ data: satellites.map(sat => sat.name), scaleType: 'band' }]}
    />
  );
}
