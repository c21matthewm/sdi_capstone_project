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
  xAxes: [
    {
    ticks: {
          autoSkip: false,
          maxRotation: 90,
          minRotation: 90
      },
      // tickLabelStyle: {
      //   angle: 45,
      //   textAnchor: 'start',
      //   fontSize: 12,
      // }
    }
  ],
  // width: 500,
  // height: 300,
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
    unknownData: 0,
    losData: 0,
    atmoData: 0,
    interferenceData: 0,
    latencyData: 0,
    malfunctionData: 0,
    powerData: 0,
    coordinationData: 0,
    satellite: 'sat'
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
      let flag = false;
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
                        flag = true;
                        break;
                      case 'Blocked LOS':
                        losData += 1;
                        flag = true;
                        break;
                      case 'Atmospheric Conditions':
                        atmoData += 1;
                        flag = true;
                        break;
                      case 'Signal Interference':
                        interferenceData += 1;
                        flag = true;
                        break;
                      case 'Signal Latency':
                        latencyData += 1;
                        flag = true;
                        break;
                      case 'Equipment Malfunction':
                        malfunctionData += 1;
                        flag = true;
                        break;
                      case 'Power Supply Issue':
                        powerData += 1;
                        flag = true;
                        break;
                      case 'Frequency Coordination':
                        coordinationData += 1;
                        flag = true;
                        break;
                      default:
                        console.log('none');
                    }
                  }))
                  satname = data[0].name
                }
              })
              .then(() => {
                if (flag) {
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
        { dataKey: 'unknownData', label: 'Unknown', stack: "total" },
        { dataKey: 'losData', label: 'LOS', stack: "total" },
        { dataKey: 'interferenceData', label: 'Inteference', stack: "total" },
        { dataKey: 'latencyData', label: 'Latency', stack: "total" },
        { dataKey: 'malfunctionData', label: 'Malfunction', stack: "total" },
        { dataKey: 'powerData', label: 'Power', stack: "total" },
        { dataKey: 'coordinationData', label: 'Coordination', stack: "total" },

      ]}
      slotProps={{
        legend: {
          direction: "column",
          position:  {vertical: 'top', horizontal: 'right'},
          margin: 20,
          labelStyle: {
            fontsize: 10,
          },
        }
      }}
      {...chartSetting}
    />
  );
}
