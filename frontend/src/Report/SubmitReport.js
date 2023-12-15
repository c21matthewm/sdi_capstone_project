import Checkbox from '@mui/material/Checkbox';
import React, { useEffect, useState, useContext } from "react";
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
import { Divider } from '@mui/material';
import Button from '@mui/material/Button';
import {Typography} from '@mui/material';

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

  const { userUID, satellites } = useContext(userContext);

  const [time, setTime] = useState('');
  const [freq, setFreq] = useState('');
  const [mission, setMission] = useState('');
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [status, setStatus] = useState('');
  const [satID, setSatID] = useState(1);
  const [reason, setReason] = useState([]);
  const reasonsForReport = [
    {issue: 'Unknown Issue'},
    {issue: 'Blocked LOS'},
    {issue: 'Atmospheric Conditions'},
    {issue: 'Signal Latency'},
    {issue: 'Signal Interference'},
    {issue: 'Equipment Malfunction'},
    {issue: 'Power Supply Issue'},
    {issue: 'Frequency Coordination'}
  ];


  const onSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/reports',
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
          "userID": userUID,
          "archived": false
        }),
      })
      .then(() => {
        setTime('');
        setFreq('');
        setMission('');
        setLat(0);
        setLong(0);
        setStatus('');
        setReason([]);
      })
  }

  useEffect(() => {
    console.log('reason: ', reason)
    console.log('userUID: ', userUID)
  }, [reason])

  return (
    <>
      <NavBar />
      <div className='report-container'>
      <Typography className="satT" variant="h5" gutterBottom>Submit Report</Typography>
        <Box className="box" id="add-box" component="section" sx={{  boxShadow: 3, p: 2, border: '1px solid grey' }}>
          <form onSubmit={onSubmit}>
            <InputLabel id="sat-label">Satellite:</InputLabel>
            <Select id="sat-label" value={satID} name="satellites" onChange={(e) => setSatID(e.target.value)}>
              {satellites.map(satellite => {
                return (
                  <MenuItem value={satellite.satelliteID}>{satellite.name}</MenuItem>
                )
              })}
            </Select>
            <Divider />
            <InputLabel>Time:</InputLabel>
            <TextField variant="outlined" type='datetime-local' onChange={(e) => setTime(e.target.value)} value={time} />
            <h6 >
              *User access to SATCOM as of this time
            </h6>
            <Divider />
            <InputLabel id="freq-label">Frequency Band:</InputLabel>
            <Select id="freq-label" value={freq} name="frequency bands" onChange={(e) => setFreq(e.target.value)}>
              <MenuItem value="UHF">UHF</MenuItem>
              <MenuItem value="SHF">SHF</MenuItem>
              <MenuItem value="EHF">EHF</MenuItem>
            </Select>
            <Divider />
            <InputLabel>Mission:</InputLabel>
            <TextField variant="outlined" onChange={(e) => setMission(e.target.value)} value={mission} />
            <Divider />

            <InputLabel>Latitude:</InputLabel>
            <TextField variant="outlined" onChange={(e) => setLat(e.target.value)} value={lat} />
            <Divider />

            <InputLabel>Longitude:</InputLabel>
            <TextField variant="outlined" onChange={(e) => setLong(e.target.value)} value={long} />
            <Divider />

            <InputLabel id="status-label">Status:</InputLabel>
            <Select id="status-label" value={status} name="status" onChange={(e) => setStatus(e.target.value)}>
              <MenuItem value="GREEN">Green</MenuItem>
              <MenuItem value="YELLOW">Yellow</MenuItem>
              <MenuItem value="RED">Red</MenuItem>
            </Select>
            <h6 >
              *Green: Can Connect. Quality is Good.<br />
              *Yellow: Can Connect. Quality is Degraded.<br />
              *Red: Cannot Connect.
            </h6>

            <Divider />
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="reason">Reason</InputLabel>
              <Select
                labelId="reason"
                id="reason"
                multiple
                value={reason}
                onChange ={ (e) => {
                  console.log(e.target.value);
                  setReason(e.target.value);
                }}
                input={<OutlinedInput label="Reason" />}
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

            <Divider/>
            <Button type="submit" variant='contained' color='info'>submit</Button>
          </form>
        </Box>
      </div>
    </>
  )
}