import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { useContext, useEffect, useState } from 'react';
import { userContext } from '../App';

const chartSetting = {
  yAxis: [
    {
      label: 'error type',
    },
  ],
  width: 500,
  height: 300,
  // sx: {
  //   [`.${axisClasses.left} .${axisClasses.label}`]: {
  //     transform: 'translate(-20px, 0)',
  //   },
  // },
};

export default function BarsDataset() {
  const { reports, satellites } = useContext(userContext);
  const [reload , setReload] = useState(null)
  const [dataset, setDataset] = useState([{
    unknownData: 3,
    losData: 7,
    atmoData: 6,
    interferenceData: 1,
    latencyData: 0,
    malfunctionData: 0,
    powerData: 0,
    coordinationData: 0,
    satellite: 'Jan'
  },
  {
    unknownData: 5,
    losData: 7,
    atmoData: 8,
    interferenceData: 1,
    latencyData: 0,
    malfunctionData: 0,
    powerData: 0,
    coordinationData: 0,
    satellite: 'June'
  },
  {
    unknownData: 5,
    losData: 5,
    atmoData: 8,
    interferenceData: 1,
    latencyData: 0,
    malfunctionData: 0,
    powerData: 0,
    coordinationData: 0,
    satellite: 'July'
  }])

  //   useEffect(() => {
  //   let dataset = satellites.map(sat => (
  //       {
  //       unknownData: 59,
  //       losData: 57,
  //       atmoData: 86,
  //       interferenceData: 21,
  //       latencyData: 0,
  //       malfunctionData: 0,
  //       powerData: 0,
  //       coordinationData: 0,
  //       month: sat.name,
  //     }
  //   ))
  // }, [])

  useEffect(() => {
    let temp = [];
    satellites.map((sat) => {
      let unknownData = 0;
      let losData = 0;
      let atmoData = 0;
      let interferenceData = 0;
      let latencyData = 0;
      let malfunctionData = 0;
      let powerData = 0;
      let coordinationData = 0;
      let satname;
      fetch(`http://localhost:8080/satellites/${sat.satelliteID}/reports`)
        .then(res => {
          if (res.status !== 200)
            throw new Error('not found')
          else
            res.json()
              // .then(data => {data.filter(result => result.reason.length > 0)})
              .then(data => {
                if (data[0]) {
                  data.map(obj => obj.reason.forEach((string) => {
                    switch (string) {
                      case 'Unknown Issue':
                        unknownData += 1;
                        break;
                      case 'Blocked LOS':
                        losData += 1;
                        break;
                      case 'Atmospheric Conditions':
                        atmoData += 1;
                        break;
                      case 'Signal Interference':
                        interferenceData += 1;
                        break;
                      case 'Signal Latency':
                        latencyData += 1;
                        break;
                      case 'Equipment Malfunction':
                        malfunctionData += 1;
                        break;
                      case 'Power Supply Issue':
                        powerData += 1;
                        break;
                      case 'Frequency Coordination':
                        coordinationData += 1;
                        break;
                      default:
                        console.log('none');
                    }
                  }))
                  satname = data[0].name
                }
              })
              .then(() => {
                if (satname) {
                  temp.push({
                    unknownData: unknownData,
                    losData: losData,
                    atmoData: atmoData,
                    interferenceData: interferenceData,
                    latencyData: latencyData,
                    malfunctionData: malfunctionData,
                    powerData: powerData,
                    coordinationData: coordinationData,
                    satellite: satname
                  })
                }
              }).then(() => {
                setDataset(temp) 
                // console.log(dataset)
              })
        }).then(()=>setReload('reload'))
    })
  }, [reload])


  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'satellite' }]}
      series={[
        { dataKey: 'unknownData', label: 'unknownData', stack: "total" },
        { dataKey: 'losData', label: 'losData', stack: "total" },
        { dataKey: 'interferenceData', label: 'interferenceData', stack: "total" },
        { dataKey: 'latencyData', label: 'latencyData', stack: "total" },
        { dataKey: 'malfunctionData', label: 'malfunctionData', stack: "total" },
        { dataKey: 'powerData', label: 'powerData', stack: "total" },
        { dataKey: 'coordinationData', label: 'coordinationData', stack: "total" },

      ]}
      {...chartSetting}
    />
  );
}
