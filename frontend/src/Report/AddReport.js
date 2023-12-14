import { Checkbox } from "@mui/material";
import { fontSize } from "@mui/system";
import React, { useEffect, useState, useContext} from "react";
import { useLocation } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import { userContext } from "../App";
import "./AddReport.css"

export const AddReport = (props) => {

    const reasonsForReport = [
      {
        issue: 'Cannot Connect'
      },
      {
        issue: 'Quality is Degraded'
      },
      {
        issue: 'Blocked LOS'
      },
      {
        issue: 'Atmospheric Conditions'
      },
      {
        issue: 'Signal Latency'
      },
      {
        issue: 'Signal Interference'
      },
      {
        issue: 'Equipment Malfunction'
      },
      {
        issue: 'Power Supply Issue'
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
        console.log(reasonsForReport[index].issue)
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
        <div className="reason-box">
          <div className="reason-select">
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
          </div>

          <div className="reason-guide">
            <ul>
              <b>Cannot Connect</b> to SATCOM<br/>
              <b>Quality is Degraded</b> or garbled<br/>
              <b>Blocked LOS</b> (line of sight) with target satellite<br/>
              <b>Atmospheric Conditions</b> are present (precipitation, thunder or sand storms)<br/>
              <b>Signal Interference</b> (waveform is distorted and/or other voices or sounds are mixed in with your voices)<br/>
              <b>Signal Latency</b> (the voices are late and/or unnaturally stretched in time)<br/>
              <b>Equipment Malfunction</b> (the antenna or radio is giving an error)<br/>
              <b>Power Supply Issues</b> (the local power source is weak or recently known to be unreliable)<br/>
              <b>Frequency Coordination</b> (there are other users intentionally trying to use your frequencies)<br/>
            </ul>
          </div>
        </div>
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