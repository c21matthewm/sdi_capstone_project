import React, { useContext } from "react";
import { userContext } from "../App";
import { NavBar } from "../NavBar/NavBar";
import './Dashboard.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button, CardActionArea, CardActions, CardMedia } from '@mui/material';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';



export const Dashboard = () => {

    const { users, setUsers, 
            satellites, setSatellites, 
            reports, setReports, 
            loggedIn, setLoggedIn,
            userIsAdmin, setUserIsAdmin } = useContext(userContext);


  return (
    <div className="big-container">
        <h2>Dashboard</h2>
        <Button variant="contained" color="success" onClick={() => {setLoggedIn(false); setUserIsAdmin(false)}}>Logout</Button>
        <Button variant="contained" color="success" onClick={() => {setUserIsAdmin(false); setLoggedIn(true)}}>Make User</Button>
        <Button variant="contained" color="success" onClick={() => {setUserIsAdmin(true); setLoggedIn(true)}}>Make Admin</Button>
        {userIsAdmin ?
            <div className="adminDisplay">
                <h3>Admin</h3>
                <div className="tileDisplay">
                    {satellites.map((satellite) => {
                        return (
                            <div className="tile">
                                <Card sx={{ border: satellite.status === 'active' ? "solid 5px #00ff00" : "solid 5px #ff0000"}} variant="outlined">
                                    <CardActionArea >
                                        <Link to={`/satellites/${satellite.satelliteID}`}>
                                            <CardMedia>
                                                <p>Sat Image</p>
                                            </CardMedia>
                                            <CardContent >
                                                <Typography variant="h5" component="div" >
                                                    {satellite.name}
                                                </Typography >
                                                {/* add any other details later*/}
                                            </CardContent >
                                        </Link>
                                    </CardActionArea >
                                    <CardActions >
                                        <Button variant="contained" color="error">Edit status</Button>
                                    </CardActions >
                                </Card >
                            </div>
                        )
                    })}
                </div>
            </div>
        :
        loggedIn ?
            <div className="userDisplay">
                <h3>User</h3>
                <div className="tileDisplay">
                {satellites.map((satellite) => {
                    return (
                        <div className="tile">
                            <Card sx={{ border: satellite.status == 'active' ? "solid 5px #00ff00" : "solid 5px #ff0000"}} variant="outlined">
                                <CardActionArea >
                                    <Link to={`/satellites/${satellite.satelliteID}`}>
                                        <CardMedia>
                                            <p>Sat Image</p>
                                        </CardMedia>
                                        <CardContent >
                                            <Typography variant="h5" component="div" >
                                                {satellite.name}
                                            </Typography >
                                            {/* add any other details later*/}
                                        </CardContent >
                                    </Link>
                                </CardActionArea >
                                <CardActions >
                                    <Button variant="contained" color="success" endIcon={<AddIcon />}>Add Report</Button>
                                </CardActions >
                            </Card >
                        </div>
                    )
                })}
                </div>
            </div>
        : <h3>Not Logged In</h3>}
    </div>
  );
};


// Displays login and create account before login
// Displays all satellites chosen by the user for the user
// displays all satellites assigned to the admin for the admin
