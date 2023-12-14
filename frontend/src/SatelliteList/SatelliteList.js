import React, { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';
import { Link } from 'react-router-dom';
import './SatelliteList.css';
import { ButtonToggle } from './ButtonToggle';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { NavBar } from '../NavBar/NavBar';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';

export const SatelliteList = () => {
    const [satellites, setSatellites] = useState([]);
    const { reports } = useContext(userContext);
    useEffect(() => {
        fetch('http://localhost:8080/satellites')
            .then(res => res.json())
            .then(data => setSatellites(data))
    }, [])

    return (
        <>
            <NavBar />
            <div className="list-container" >
                <div className="list-sat">
                    <Typography className="satT" variant="h5" gutterBottom>Satellite Index</Typography>
                    <div className="box-list">
                        {satellites.map((sat, index) => {
                            return (
                                <ListItem className="sat-info" sx={{ boxShadow: 1, border: '1px solid grey' }} key={index}>
                                    <ListItemButton component={Link} to={`/satellites/${sat.satelliteID}`} state={{ sat }}>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <SatelliteAltIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={`${sat.name.toUpperCase()}`} />
                                    </ListItemButton>
                                    <ButtonToggle sat={sat} />

                                    <Link to={`/addreport/${sat.satelliteID}`} state={{ sat }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className="add">
                                            Add Report
                                        </ Button>
                                    </Link>
                                    <Link to={`/satellites/${sat.satelliteID}`} state={{ sat }}>
                                        <Button variant="contained" color="secondary" endIcon={<ReportIcon />}>
                                            <Typography component="span">{reports.filter((report) => (report.satelliteID === sat.satelliteID)).length}</Typography>
                                        </Button>
                                    </Link>
                                </ListItem>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}