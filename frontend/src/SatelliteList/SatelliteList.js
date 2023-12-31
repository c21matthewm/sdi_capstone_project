import React, { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';
import { Link } from 'react-router-dom';
import './SatelliteList.css';
import { ButtonToggle } from './ButtonToggle';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import ReportIcon from '@mui/icons-material/Report';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { NavBar } from '../NavBar/NavBar';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

export const SatelliteList = () => {
    
    const { satellites } = useContext(userContext);

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
                                            <Avatar sx={{backgroundColor: "rgb(90,170,255)"}}>
                                                <SatelliteAltIcon  />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={`${sat.name.toUpperCase()}`} />
                                    </ListItemButton>
                                    <ButtonToggle sat={sat} />

                                    <Link to={`/addreport/${sat.satelliteID}`} state={{ sat }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            id="addB"
                                            endIcon={<ReportIcon />}>
                                            Add Report
                                        </ Button>
                                    </Link>
                                    <Link to={`/satellites/${sat.satelliteID}`} state={{ sat }}>                                   
                                    </Link>
                                </ListItem>
                            )
                        })}
                    </div>
                </div>
                {/* <SatelliteDropDown /> */}
            </div>
        </>
    )
}