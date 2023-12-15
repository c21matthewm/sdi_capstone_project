import { BarChart } from '@mui/x-charts/BarChart';
import { userContext } from "../App";
import React, { useState, useEffect, useContext } from "react";


// Unknown Issue
// LOS
// Atmospheric Conditions
// Signal Interference
// Signal Latency
// Equipment Malfunction
// Power Supply Issues
// Frequency Coordination

const unknownData = [1,1,1,1,1,1,1,1,1,1,1,1];
const losData = [1,1,1,1,1,1,1,1,1,1,1,1];
const atmoData = [1,1,1,1,1,1,1,1,1,1,1,1];
const interferenceData = [1,1,1,1,1,1,1,1,1,1,1,1];
const latencyData = [1,1,1,1,1,1,1,1,1,1,1,1];
const malfunctionData = [1,1,1,1,1,1,1,1,1,1,1,1];
const powerData = [1,1,1,1,1,1,1,1,1,1,1,1];
const coordinationData = [1,1,1,1,1,1,1,1,1,1,1,1];

export default function MixedBarChart() {

  const{reports, satellites} = useContext(userContext);

  return (
    <BarChart
      width={1000}
      height={500}
      series={[
        { data: unknownData, label: 'Unknown', stack:'stack1' },
        { data: losData, label: 'User LOS', stack: 'stack1' },
        { data: atmoData, label: 'User Weather', stack: 'stack1' },
        { data: interferenceData, label: 'Interference', stack: 'stack1' },
        { data: latencyData, label: 'Latency', stack: 'stack1' },
        { data: malfunctionData, label: 'Malfunction', stack: 'stack1' },
        { data: powerData, label: 'Power', stack: 'stack1' },
        { data: coordinationData, label: 'Frequency Coord', stack: 'stack1' },
      ]}
      xAxis={[{ data: satellites.map(sat => sat.name), label: 'Satellite Vehicles', scaleType: 'band' }]}
      yAxis={[{label: 'Reported Problems Per Satellite'}]}
      slotProps={{
        legend: {
          position: {vertical: 'top', horizontal: 'middle'},
          padding: 0,
          labelStyle: {
            fontsize: 10,
            // fill: 'blue',
          },
        }
      }}
    />
  );
}
