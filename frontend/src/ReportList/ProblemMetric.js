import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

// Garbled State Variable for Insight Constellation
// const [garbled1, setGarbled1] = useState([]); // Insight 1
// const [garbled2, setGarbled2] = useState([]); // Insight 2
// const [garbled3, setGarbled3] = useState([]); // Insight 3
// const [garbled4, setGarbled4] = useState([]); // Insight 4
// const [garbled5, setGarbled5] = useState([]); // Insight 5
// const [garbled6, setGarbled6] = useState([]); // Insight 6
// const [garbled7, setGarbled7] = useState([]); // Insight 7
// const [garbled8, setGarbled8] = useState([]); // Insight 8
// const [garbled9, setGarbled9] = useState([]); // Insight 9
// const [garbled10, setGarbled10] = useState([]); // Insight 10
// const [garbled11, setGarbled11] = useState([]); // Insight 11
// const [garbled12, setGarbled12] = useState([]); // Insight 12

// Connection State Variable for Insight Constellation
// const [connection1, setConnection1] = useState([]); // Insight 1
// const [connection2, setConnection2] = useState([]); // Insight 2
// const [connection3, setConnection3] = useState([]); // Insight 3
// const [connection4, setConnection4] = useState([]); // Insight 4
// const [connection5, setConnection5] = useState([]); // Insight 5
// const [connection6, setConnection6] = useState([]); // Insight 6
// const [connection7, setConnection7] = useState([]); // Insight 7
// const [connection8, setConnection8] = useState([]); // Insight 8
// const [connection9, setConnection9] = useState([]); // Insight 9
// const [connection10, setConnection10] = useState([]); // Insight 10
// const [connection11, setConnection11] = useState([]); // Insight 11
// const [connection12, setConnection12] = useState([]); // Insight 12

const Garbled = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];

const xLabels = [
  'Insight 1',
  'Insight 2',
  'Insight 3',
  'Insight 4',
  'Insight 5',
  'Insight 6',
  'Insight 7',
  'Insight 8',
  'Insight 9',
  'Insight 10',
  'Insight 11',
  'Insight 12',
];

export default function MixedBarChart() {
  return (
    <BarChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'pv', stack: 'stack1' },
        { data: amtData, label: 'amt' },
        { data: Garbled, label: 'Garbled', stack: 'stack1' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}
