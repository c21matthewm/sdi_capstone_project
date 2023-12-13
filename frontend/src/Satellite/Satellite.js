import React, { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Satellite.css"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { ListItemButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { NavBar } from '../NavBar/NavBar';
import { Chart } from './Chart';
import { Button } from '@mui/material';

export const Satellite = (props) => {
    const location = useLocation();
    const { sat } = location.state;
    const { reports } = useContext(userContext);
    const navigate = useNavigate();

    return (
        <>
            <div className="sat-full">
                <NavBar />
                <Button onClick={() => navigate(-1)}>return to satellist list</Button>
                <Box className="box" component="section" sx={{ p: 2 }}>
                    <div className="sat-container">
                        <div className="sat-box">
                            <Box className="box" component="section" sx={{ boxShadow: 3, p: 2, border: '1px solid grey' }}>
                                <div className="components">
                                    <Typography variant="h5" gutterBottom>{sat.name.toUpperCase()}</Typography>
                                    <img src={sat.image} height={300} alt="satellite"></img>
                                </div>
                                <div className="components">
                                    <List sx={{ p: 0, m: 0 }} component="nav" aria-label="mailbox folders">
                                        <Typography variant="h6" gutterBottom>Status: {sat.status.toUpperCase()} </Typography>
                                        <ListItem>
                                            <Typography variant="h7" gutterBottom>{`Orbit: ${sat.orbit}`} </Typography>
                                        </ListItem >
                                        <ListItem >
                                            <Typography variant="h7" gutterBottom>{`Frequency Band: ${sat.frequency_band}`} </Typography>
                                        </ListItem>
                                        <ListItem >
                                            <Typography variant="h7" gutterBottom>{`Longitude: ${sat.longitude}`} </Typography>
                                        </ListItem>
                                        <ListItem >
                                            <Typography variant="h7" gutterBottom>{`Mission: ${sat.mission}`}</Typography>
                                        </ListItem>
                                        <ListItem >
                                            <Typography variant="h7" gutterBottom>{`Country: ${sat.country}`}</Typography>
                                        </ListItem>
                                    </List>
                                </div>
                            </Box>
                        </div>
                        <div className="stacked">
                            <Box className="box" component="section" sx={{ boxShadow: 3, p: 2, border: '1px solid grey' }}>
                                <div className="components" id="reports">
                                    <Typography variant="h6" gutterBottom> Recent Reports:</Typography>
                                    {reports.filter((report) => (report.satelliteID === sat.satelliteID))
                                        .map((report, index) => {
                                            return (
                                                <>
                                                    <List component={Link} to={`/reports/${report.reportID}`} state={{ report, sat }}>
                                                        <ListItemText primary={`REPORT#${report.reportID}: ${report.time}`} />
                                                    </List>
                                                </>
                                            )
                                        })}
                                </div>
                            </Box>
                            <Box className="box" component="section" sx={{ boxShadow: 3, p: 2, border: '1px solid grey' }}>
                                <Chart state={{ sat }}/>
                            </Box>
                        </div>
                    </div>
                </Box>
            </div>
        </>

    )
}
