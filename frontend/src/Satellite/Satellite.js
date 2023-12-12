import React, { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';
import { Link, useLocation } from 'react-router-dom';
import "./Satellite.css"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { ListItemButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { NavBar } from '../NavBar/NavBar';

export const Satellite = (props) => {
    const location = useLocation();
    const { sat } = location.state;
    const { reports } = useContext(userContext);

    return (
        <>
      
        <div className="sat-full">
        <NavBar/>
            <Box className="box" component="section" sx={{ p: 2, border: '1px solid grey' }}>
                <div className="sat-container">
                    <div className="sat-box">
                        <Box className="box" component="section" sx={{boxShadow: 3, p: 2, border: '1px solid grey' }}>
                            {/* <div className="sat-box"> */}
                            <div className="components">
                                <Typography variant="h5" gutterBottom>{sat.name.toUpperCase()}</Typography>
                                <img src={sat.image} width={500} alt="satellite"></img>
                            </div>
                            <div className="components">
                                <List sx={{ p: 0, m: 0 }} component="nav" aria-label="mailbox folders">

                                    <Typography variant="h6" gutterBottom>Status: {sat.status.toUpperCase()}   </Typography>
                                    <ListItem >
                                        <ListItemText primary={`Orbit: ${sat.orbit}`} />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemText primary={`Frequency Band: ${sat.frequency_band}`} />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemText primary={`Longitude: ${sat.longitude}`} />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemText primary={`Mission: ${sat.mission}`} />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemText primary={`Country: ${sat.country}`} />
                                    </ListItem>
                                </List>
                            </div>
                            {/* </div> */}
                        </Box>
                    </div>

                    <Divider></Divider>
                    <Box className="box" component="section" sx={{ boxShadow: 3,p: 2, border: '1px solid grey' }}>
                        {/* <div className="sat-box"> */}
                        <div className="components" id="reports">
                            <Typography variant="h6" gutterBottom> Recent Reports:</Typography>
                            {reports.filter((report) => (report.satelliteID === sat.satelliteID))
                                .map((report, index) => {
                                    return (
                                        <>
                                            <ListItemButton component={Link} to={`/reports/${report.reportID}`} state={{ report }}>
                                                <ListItemText primary={`REPORT#${report.reportID}: ${report.time}`} />
                                            </ListItemButton>
                                            {/* <li><Link to={`/reports/${report.reportID}`} state={{ report }}>REPORT #{`${report.reportID}`}: {report.time} </Link></li> */}
                                        </>
                                    )
                                })}


                        </div>
                    </Box>
                </div>
            </Box>
        </div>
        </>

    )
}
