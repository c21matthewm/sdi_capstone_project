import { Checkbox } from "@mui/material";
import { fontSize } from "@mui/system";
import React, { useEffect, useState, useContext} from "react";
import { useLocation } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import { userContext } from "../App";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import ListItemText from '@mui/material/ListItemText';


export const SubmitReport = () => {


  const reasonsForReport = [
    {
      issue: 'Cannot Connect',
      checked: false

    },
    {
      issue: 'Quality is Degraded',
      checked: false
    },
    {
      issue: 'Blocked LOS',
      checked: false
    },
    {
      issue: 'Atmospheric Conditions',
      checked: false
    },
    {
      issue: 'Signal Latency',
      checked: false
    },
    {
      issue: 'Signal Interference',
      checked: false
    },
    {
      issue: 'Equipment Malfunction',
      checked: false
    },
    {
      issue: 'Power Supply Issue',
      checked: false
    },
    {
      issue: 'Frequency Coordination',
      checked: false
    }
  ];



  const { userUID, satellites } = useContext(userContext);

  const [time, setTime] = useState('');
  const [freq, setFreq] = useState('');
  const [mission, setMission] = useState('');
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [status, setStatus] = useState('');
  const [reason, setReason] = useState([]);
  const [satID, setSatID] = useState(1);
  const [checked, setChecked] = useState([]);

  function handleOnChange(position) {
    let isItChecked = checked.map((item, index) =>
      index === position ? !item : item
    );

    setChecked(isItChecked);


    let totalIssues = isItChecked.reduce((sum, report, index) => {
      if (report === true) {
        return sum += reasonsForReport[index].issue;
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
            "satelliteID": satID,
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

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setReason(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };

    useEffect(()=> {
      console.log(reason)
    }, [reason])

  return (
    <>
    <NavBar/>
      <form onSubmit={onSubmit}>
      <InputLabel id="sat-label">Satellite:</InputLabel>
          <Select id="sat-label" value={satID} name="satellites" onChange={(e)=>setSatID(e.target.value)}>
            {satellites.map(satellite => {
              return(
                <MenuItem value={satellite.satelliteID}>{satellite.name}</MenuItem>
              )
            })}
          </Select>
      <hr/>
      <label>Time:</label>
          <TextField variant="outlined" type='datetime-local' onChange={(e)=>setTime(e.target.value)} value={time}/>
          <h6 >
            *User access to SATCOM as of this time
          </h6>
        <hr/>
        <InputLabel id="freq-label">Frequency Band:</InputLabel>
          <Select id="freq-label" value={freq} name="frequency bands" onChange={(e)=>setFreq(e.target.value)}>
            <MenuItem value="UHF">UHF</MenuItem>
            <MenuItem value="SHF">SHF</MenuItem>
            <MenuItem value="EHF">EHF</MenuItem>
          </Select>
        <hr/>

        <label>Mission:</label>
          <TextField variant="outlined" onChange={(e)=>setMission(e.target.value)} value={mission}/>
        <hr/>
        
        <label>Latitude:</label>
          <TextField variant="outlined" onChange={(e)=>setLat(e.target.value)} value={lat}/>
        <hr/>
        
        <label>Longitude:</label>
          <TextField variant="outlined"  onChange={(e)=>setLong(e.target.value)} value={long}/>
        <hr/>
        
        <InputLabel id="status-label">Status:</InputLabel>
          <Select id="status-label" value={status} name="status" onChange={(e)=>setStatus(e.target.value)}>
            <MenuItem value="GREEN">Green</MenuItem>
            <MenuItem value="YELLOW">Yellow</MenuItem>
            <MenuItem value="RED">Red</MenuItem>
          </Select>
          <h6 >
            *Green: Can Connect. Quality is Good.<br/>
            *Yellow: Can Connect. Quality is Degraded.<br/>
            *Red: Cannot Connect. 
          </h6>


        <hr/>
        
        <InputLabel>Reason:</InputLabel>
            <Select
              value={reason}
              multiple
              onChange={(e)=>{setReason([...reason, e.target.value]);
              
              }}

              >

              {reasonsForReport.map(x => {
              return(
                <MenuItem value={x.issue}>
                  <Checkbox checked={reason.includes(x.issue)} /> 
                  <ListItemText primary={x.issue} />
                </MenuItem>
              )
            })}


              {/* <MenuItem value="Cannot Connect">
                <Checkbox checked={reason.indexOf("Cannot Connect") > -1} /> 
                <ListItemText primary="Cannot Connect" />
              </MenuItem> 
              <MenuItem value="Quality is Degrqaded">
                <Checkbox checked={reason.indexOf("Quality is Degraded") > -1} /> 
                <ListItemText primary="Quality is Degraded" />
                </MenuItem>  */}
              {/* <MenuItem value="Blocked LOS">Blocked LOS</MenuItem> 
              <MenuItem value="Atmospheric Conditions">Atmospheric Conditions</MenuItem> 
              <MenuItem value="Signal Interference">Signal Interference</MenuItem> 
              <MenuItem value="Signal Latency">Signal Latency</MenuItem> 
              <MenuItem value="Equipment Malfunction">Equipment Malfunction</MenuItem> 
              <MenuItem value="Power Supply Issues">Power Supply Issues</MenuItem> 
              <MenuItem value="Frequency Coordination">Frequency Coordination</MenuItem>  */}
            </Select>

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