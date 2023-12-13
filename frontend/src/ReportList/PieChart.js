import * as React from 'react';
import { useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

// const [testValue, setTestValue] = useState([])
// setTestValue(60)

const data = [
  { value: 60, label: 'A' },
  { value: 40, label: 'B' },

];
const differentData = [
  { value: 60, label: 'A' },
  { value: 40, label: 'B' },

];
const data3 = [
  { value: 60, label: 'A' },
  { value: 40, label: 'B' },

];

const size = {
  width: 400,
  height: 100,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <>
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>

    </>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <>
      <PieChart 
        colors={['skyblue', 'grey', 'black']}
        series={[
          { 
            data: data, 
            innerRadius: 38,
            cx: 50,
            
          },
          { 
            data: differentData,
            innerRadius: 38,
            cx: 150,
          },
          { 
            data: data3,
            innerRadius: 38,
            cx: 250 
          }
        ]}
        slotProps={{
          legend: { hidden: true}
        }} 
        {...size}>
        <PieCenterLabel>Pie1</PieCenterLabel>
        <PieCenterLabel>Pie2</PieCenterLabel>
        <PieCenterLabel>Pie3</PieCenterLabel>

      </PieChart>
      {/* <PieChart series={[{ data2, innerRadius: 80 }]} {...size}>
        <PieCenterLabel>Pie2</PieCenterLabel>
      </PieChart>
      <PieChart series={[{ data3, innerRadius: 80 }]} {...size}>
        <PieCenterLabel>Pie3</PieCenterLabel>
      </PieChart> */}
  </>
  );
}