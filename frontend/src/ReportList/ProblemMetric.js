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

const unknownData = [0,0,0,0,0,0,0,0,0,0,0,0];
const losData = [0,0,0,0,0,0,0,0,0,0,0,0];
const atmoData = [0,0,0,0,0,0,0,0,0,0,0,0];
const interferenceData = [0,0,0,0,0,0,0,0,0,0,0,0];
const latencyData = [0,0,0,0,0,0,0,0,0,0,0,0];
const malfunctionData = [0,0,0,0,0,0,0,0,0,0,0,0];
const powerData = [0,0,0,0,0,0,0,0,0,0,0,0];
const coordinationData = [0,0,0,0,0,0,0,0,0,0,0,0];

export default function MixedBarChart() {

  const{reports, satellites} = useContext(userContext);

    useEffect(() => {
      reports.map((report) => {
        report.reason.map((string) => {
          console.log(string);
          switch (string) {
            case 'Unknown Issue':
              unknownData[report.satelliteID - 1] += 1;
              break;
            case 'Blocked LOS':
              losData[report.satelliteID - 1] += 1;
              break;
            case 'Atmospheric Conditions':
              atmoData[report.satelliteID - 1] += 1;
              break;
            case 'Signal Interference':
              interferenceData[report.satelliteID - 1] += 1;
              break;
            case 'Signal Latency':
              latencyData[report.satelliteID - 1] += 1;
              break;
            case 'Equipment Malfunction':
              malfunctionData[report.satelliteID - 1] += 1;
              break;
            case 'Power Supply Issue':
              powerData[report.satelliteID - 1] += 1;
              break;
            case 'Frequency Coordination':
              coordinationData[report.satelliteID - 1] += 1;
              break;
            default:
              return true;
          }
        })
      })
    }, [])

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
          },
        }
      }}
    />
  );
}
