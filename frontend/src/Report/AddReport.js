import { Checkbox } from "@mui/material";
import { fontSize } from "@mui/system";
import React, { useEffect, useState, useContext} from "react";
import { useLocation } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import { userContext } from "../App";

export const AddReport = (props) => {

    const reasonsForReport = [
      {
        issue: 'Cannot Connect'
      },
      {
        issue: 'Quality is Degraded'
      },
      {
        issue: 'Latency'
      },
      {
        issue: 'Interference'
      },
      {
        issue: 'Equipment Malfunction'
      },
      {
        issue: 'Power Supply Issues'
      },
      {
        issue: 'Frequency Coordination'
      }
    ];


  const { userUID } = useContext(userContext);
  const location = useLocation();
  const { sat } = location.state;

  const [time, setTime] = useState('');
  const [freq, setFreq] = useState('');
  const [mission, setMission] = useState('');
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [status, setStatus] = useState('');
  const [reason, setReason] = useState([]);

  const [checked, setChecked] = useState(
    new Array(reasonsForReport.length).fill(false)
  );

  function handleOnChange(position) {
    let isItChecked = checked.map((item, index) =>
      index === position ? !item : item
    );

    setChecked(isItChecked);


    let totalIssues = isItChecked.reduce((sum, report, index) => {
      if (report === true) {
        return ` ${sum += reasonsForReport[index].issue}, `;
      }
      return sum;
    });

    setReason(totalIssues)

    console.log(totalIssues)

  }

  

 
    const onSubmit = (e) => {
      e.preventDefault();
        fetch('http://localhost:8080/reports' ,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "time": time,
            "frequency_band": freq,
            "mission": mission,
            "latitude": lat,
            "longitude": long,
            "status": status,
            "reason": reason,
            "satelliteID": sat.satelliteID,
            "userID": userUID
          }),
        })
        .then(()=>{
          setTime('');
          setFreq('');
          setMission('');
          setLat(0);
          setLong(0);
          setStatus('');
          setReason('');
        })
    }
  // function convertReason(){
  //   if (garbled === true) {
  //     setReason('garbled')
  //     console.log('The reason is:', reason)
  //   }
  // }

  return (
    <>
    <NavBar/>
      <form onSubmit={onSubmit}>
        <label>Time:</label>
          <input type='datetime-local' onChange={(e)=>setTime(e.target.value)} value={time}></input>
          <h6 >
            *User access to SATCOM as of this time
          </h6>
        <hr/>
        <label>Frequency Band:</label>
          <input type='text' onChange={(e)=>setFreq(e.target.value)} value={freq}></input>
        <hr/>

        <label>Mission:</label>
          <input type="text" onChange={(e)=>setMission(e.target.value)} value={mission}></input>
        <hr/>

        <label>Latitude:</label>
          <input type="number" onChange={(e)=>setLat(e.target.value)} value={lat}></input>
        <hr/>

        <label>Longitude:</label>
          <input type="number" onChange={(e)=>setLong(e.target.value)} value={long}></input>
        <hr/>

        <label>Status:</label>
          <input type="status" onChange={(e)=>setStatus(e.target.value)} value={status}></input>
          <h6 >
            *Green: Can Connect. Quality is Good.<br/>
            *Yellow: Can Connect. Quality is Degraded.<br/>
            *Red: Cannot Connect.
          </h6>


        <hr/>

        <label>Reason:</label><br/>
        <ul>
          {reasonsForReport.map(({ issue }, index) => {
            return (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={checked[index]}
                  onChange={() => handleOnChange(index)}
                />
                <label>{issue}</label>
              </li>
            );
          })}
        </ul>

        <hr/>
        <button type="submit">submit</button>

        {/* <button type="submit" onSubmit={convertReason}>submit</button> */}
      </form>
    </>
  )
}

// table.string('time');
// table.string('frequency_band');
// table.string('mission');
// table.integer('latitude');
// table.integer('longitude');
// table.integer('userID')
//   table.foreign('userID').references('users.userID');
// table.integer('satelliteID')
//   table.foreign('satelliteID').references('satellites.satelliteID');
// table.string('status');
// table.string('reason');