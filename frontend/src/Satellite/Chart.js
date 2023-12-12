import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function Chart() {
  const location = useLocation();
  const { sat } = location.state;
  const [reports, setReports] = useState([])
  const [jan, setJan] = useState(0)
  const [feb, setFeb] = useState(0)
  const [mar, setMar] = useState(0)
  const [apr, setApr] = useState(0)
  const [may, setMay] = useState(0)
  const [jun, setJun] = useState(0)
  const [jul, setJul] = useState(0)
  const [aug, setAug] = useState(0)
  const [sep, setSep] = useState(0)
  const [oct, setOct] = useState(0)
  const [nov, setNov] = useState(0)
  const [dec, setDec] = useState(0)
  // let dec=0;
  // let nov=0;
  // let oct=0;

  useEffect(() => {
    let xjan = 0;
    let xfeb = 0;
    let xmar = 0;
    let xapr = 0;
    let xmay = 0;
    let xjun = 0;
    let xjul = 0;
    let xaug = 0;
    let xsep = 0;
    let xoct = 0;
    let xnov = 0;
    let xdec = 0;

    fetch(`http://localhost:8080/reports/satellites/${sat.satelliteID}`)
      .then((res) => res.json())
      .then((data) => { setReports(data) })
      .then(() => {
        reports.map((date) => {
          let time = new Date(date.time);
          let month = time.getMonth();
          if (month === 0)
            xjan++;
          else if (month === 1)
            xfeb++;
          else if (month === 2)
            xmar++;
          else if (month === 3)
            xapr++;
          else if (month === 4)
            xmay++;
          else if (month === 5)
            xjun++;
          else if (month === 6)
            xjul++;
          else if (month === 7)
            xaug++;
          else if (month === 8)
            xsep++;
          else if (month === 9)
            xoct++;
          else if (month === 10)
            xnov++;
          else if (month === 11)
            xdec++;
        })
      }).then(() => {
        setDec(xdec);
        setNov(xnov);
        setOct(xoct);
        setSep(xsep);
        setAug(xaug);
        setJul(xjul);
        setJun(xjun);
        setMay(xmay);
        setApr(xapr);
        setMar(xmar);
        setFeb(xfeb);
        setJan(xjan);
      })
  }, [])

  return (
    <>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
        series={[
          {
            curve: "linear",
            data: [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec],
          },
        ]}
        width={500}
        height={300}
      />
    </>
  );
}