import Checkbox from '@mui/material/Checkbox';
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
import OutlinedInput from '@mui/material/OutlinedInput';

export const SubmitReport = () => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
  const reasonsForReport = [
    {
      issue: 'Cannot Connect',
    },
    {
      issue: 'Quality is Degraded',
    },
    {
      issue: 'Blocked LOS',
    },
    {
      issue: 'Atmospheric Conditions',
    },
    {
      issue: 'Signal Latency',
    },
    {
      issue: 'Signal Interference',
    },
    {
      issue: 'Equipment Malfunction',
    },
    {
      issue: 'Power Supply Issue',
    },
    {
      issue: 'Frequency Coordination',
    }
  ];



  const { userUID, satellites } = useContext(userContext);

  const [time, setTime] = useState('');
  const [freq, setFreq] = useState('');
  const [mission, setMission] = useState('');
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [status, setStatus] = useState('');
  const [satID, setSatID] = useState(1);
  const [reason, setReason] = useState([]);

  
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setReason(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


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
        <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="reason">Tag</InputLabel>
        <Select
          labelId="reason"
          id="demo-multiple-checkbox"
          multiple
          value={reason}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {reasonsForReport.map((string) => (
            <MenuItem key={string.issue} value={string.issue}>
              <Checkbox checked={reason.indexOf(string.issue) > -1} />
              <ListItemText primary={string.issue} />
            </MenuItem>
          ))}
        </Select>
        </FormControl>

        <hr/>
        <button type="submit">submit</button>
      </form>
    </>
  )
}

