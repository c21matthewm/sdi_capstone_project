import React, { useState, useEffect, useContext, createContext} from 'react';
import { userContext } from '../App';
import { Link, useNavigate } from 'react-router-dom';
import './SatelliteList.css';
import { ButtonToggle } from './ButtonToggle';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { NavBar } from '../NavBar/NavBar';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';
import { yellow } from '@mui/material/colors';


export const SatelliteList = () => {
    const [satellites, setSatellites] = useState([]);
    const { loggedInUser,
            reports } = useContext(userContext)
    const primary = yellow[300];

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
                                {!loggedInUser.admin && <ButtonToggle sat={sat} />}
                                {/* <ButtonToggle sat={sat} /> */}
                                                
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