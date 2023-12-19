import { BarChart } from '@mui/x-charts/BarChart';
import { userContext } from "../App";
import React, { useState, useEffect, useContext } from "react";

/* THIS IS THE LIST OF ADDITIONAL REASONS CONTRIBUTING TO A USER REPORTING YELLOW OR RED */
// Unknown Issue
// LOS
// Atmospheric Conditions
// Signal Interference
// Signal Latency
// Equipment Malfunction
// Power Supply Issues
// Frequency Coordination

/* THESE ARE IN THE DEFAULT X-CHART FORMAT AND MUST BE HARD CODED TO HAVE ARRAYS EQUAL TO NUMBER OF SATELLITES*/
const unknownData = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const losData =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const atmoData =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const interferenceData =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const latencyData =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const malfunctionData =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const powerData =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const coordinationData =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

/* THIS FORMAT ALLOWS A VARIABLE TO DICTATE THE LENGTH OF THE ARRAY AND BUILD THEM OUT WITH ZEROS */
// const numberSatellites = 30;
// const unknownData = Array(numberSatellites).fill(0);
// const losData = Array(numberSatellites).fill(0);
// const atmoData = Array(numberSatellites).fill(0);
// const interferenceData = Array(numberSatellites).fill(0);
// const latencyData = Array(numberSatellites).fill(0);
// const malfunctionData = Array(numberSatellites).fill(0);
// const powerData = Array(numberSatellites).fill(0);
// const coordinationData = Array(numberSatellites).fill(0);

/* THE FOLLOWING IS CODE EXPERIMENTATION TO FIND WAYS TO GET [numberSATELLITES = satellites.length] */
// const arrayBuilder = satellites.length;
// function UseArrayBuilder(){
//   const{satellites} = useContext(userContext);
//   const [numberSatellites, setNumberSatellites] = useState(0);
//   setNumberSatellites = satellites.length;
//   return numberSatellites;
// }

// function setNumberSatellites(){
//   setNumberSatellites = satellites.length;
// }

// const numberSatellites = satellite.length;
// const [numberSatellites, setNumberSatellites] = useState(13);
// const{reports, satellites} = useContext(userContext);

export default function MixedBarChart() {
const{ reports, satellites } = useContext(userContext);
const [satArr, setSat] = useState([])
    useEffect(() => {
      let satNames = satellites.map(sat => sat.name)
      setSat(satNames);

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
              console.log('none')
          }
        })
      })
    }, [])

  return (
    <BarChart
    // animation={false}
      width={1000}
      height={500}
      series={[
        { data: [0,3,0], label: 'Unknown', stack:'stack1' },
        { data: [0,3,1], label: 'User LOS', stack: 'stack1' },
        { data: [0,0,0], label: 'User Weather', stack: 'stack1' },
        { data: [0,0,0], label: 'Interference', stack: 'stack1' },
        { data: [0,0,0], label: 'Latency', stack: 'stack1' },
        { data:[0,0,0], label: 'Malfunction', stack: 'stack1' },
        { data: [0,0,0], label: 'Power', stack: 'stack1' },
        { data: [0,0,0], label: 'Frequency Coord', stack: 'stack1' },
      ]}
      xAxis={[{ data: ["sat1", "sat2", "sat3" ], label: 'Satellite Vehicles', scaleType: 'band' }]}
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
