import React, { useState} from "react";
import { useLocation } from "react-router-dom";

export const AddReport = (props) => {
  const location = useLocation();
  const { sat } = location.state;

  const [time, setTime] = useState('');
  const [freq, setFreq] = useState('');
  const [mission, setMission] = useState('');
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [status, setStatus] = useState('');
  const [reason, setReason] = useState('');

  // Introduced to facilitate more structured reporting and metrics
  const [categoryfilter, setCategoryFilter] = useState('Category');

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
            "userID": 1 // HARD CODED UNTIL AUTH / LOGIN
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

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>Time:</label><input type="text" onChange={(e)=>setTime(e.target.value)} value={time}></input>
        <label>Frequency Band:</label><input type="text" onChange={(e)=>setFreq(e.target.value)} value={freq}></input>
        <label>Mission:</label><input type="text" onChange={(e)=>setMission(e.target.value)} value={mission}></input>
        <label>Latitude:</label><input type="number" onChange={(e)=>setLat(e.target.value)} value={lat}></input>
        <label>Longitude:</label><input type="number" onChange={(e)=>setLong(e.target.value)} value={long}></input>
        <label>Status:</label><input type="status" onChange={(e)=>setStatus(e.target.value)} value={status}></input>
        <label>Reason:</label><textarea onChange={(e)=>setReason(e.target.value)} value={reason}></textarea>
        <button type="submit" >submit</button>
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