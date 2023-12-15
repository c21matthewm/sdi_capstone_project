import React, { useState, useContext } from "react";
import { NavBar } from "../NavBar/NavBar";
import { userContext } from "../App";
import { useNavigate } from "react-router-dom";
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
import {Typography} from "@mui/material";

export const AddSatellite = () => {
  const [name, setName] = useState("");
  const [longitude, setLongitude] = useState(0);
  const [status, setStatus] = useState("");
  const [orbit, setOrbit] = useState("");
  const [mission, setMission] = useState("");
  const [country, setCountry] = useState("");
  const [frequencyBand, setFrequencyBand] = useState("");
  const navigate = useNavigate();
  // const { userUID } = useContext(userContext)
  // const [image, setImage] = useState("");

  const onSatelliteSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/satellites", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        longitude: longitude,
        status: status,
        orbit: orbit,
        mission: mission,
        country: country,
        frequency_band: frequencyBand,
        favorites: ["pMr2t4qkIgMwisegISjdwOMW9UU2"],
        image: "https://spacenews.com/wp-content/uploads/2015/02/DMSP-USAF-e1458009205961.jpg",
      }),
    }).then(() => {
      setName("");
      setLongitude(0);
      setStatus("");
      setOrbit("");
      setMission("");
      setCountry("");
      setFrequencyBand("");
      navigate('/')
    });
  };

  return (
    <>
      <NavBar />
      <Typography className="AddSat" variant="h5" gutterBottom>Add Satellite</Typography>
      <div className='report-container'>
        <Box className="box" id="add-box" component="section" sx={{ boxShadow: 3, p: 2, border: '1px solid grey' }}>
          <form onSubmit={onSatelliteSubmit}>
            <InputLabel>Name:</InputLabel>
            <TextField
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <Divider></Divider>

            <InputLabel>Longitude:</InputLabel>
            <TextField
              type="number"
              onChange={(e) => setLongitude(e.target.value)}
              value={longitude}
            />
            <Divider></Divider>


            <InputLabel>Status:</InputLabel>
            <Select id="status" value={status} name="status" onChange={(e) => setStatus(e.target.value)}>
              <MenuItem value="GREEN">Green</MenuItem>
              <MenuItem value="YELLOW">Yellow</MenuItem>
              <MenuItem value="RED">Red</MenuItem>
            </Select>
            <Divider></Divider>

            <InputLabel>Orbit:</InputLabel>
            <Select id="orbit" value={orbit} name="orbit" onChange={(e) => setOrbit(e.target.value)}>
              <MenuItem value="UHF">LEO</MenuItem>
              <MenuItem value="SHF">MEO</MenuItem>
              <MenuItem value="EHF">GEO</MenuItem>
              <MenuItem value="EHF">HEO</MenuItem>
            </Select>
            <Divider></Divider>

            <InputLabel>Mission:</InputLabel>
            <TextField
              type="text"
              onChange={(e) => setMission(e.target.value)}
              value={mission}
            />
            <Divider></Divider>

            <InputLabel>Country:</InputLabel>
            <TextField
              type="text"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            />
            <Divider></Divider>

            <InputLabel>Frequency Band:</InputLabel>
            <Select id="freq-label" value={frequencyBand} name="frequency bands" onChange={(e) => setFrequencyBand(e.target.value)}>
              <MenuItem value="UHF">UHF</MenuItem>
              <MenuItem value="SHF">SHF</MenuItem>
              <MenuItem value="EHF">EHF</MenuItem>
            </Select>
            <Divider></Divider>

            <Button type="submit" variant="contained" color="info">Submit</Button>
          </form>
        </Box>
      </div>
    </>
  );
};