import React, { useState, useEffect, useContext, createContext } from 'react';
import { userContext } from '../App';
import { Link } from 'react-router-dom';
import '../SatelliteList/SatelliteList.css';
import { ButtonToggle } from './ButtonToggle';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { NavBar } from '../NavBar/NavBar';
import { Typography } from '@mui/material';

export const ButtonContext = createContext()

export const SatelliteList = () => {
    const [satellites, setSatellites] = useState([]);
    const { userUID } = useContext(userContext)
    useEffect(() => {
        fetch('http://localhost:8080/satellites')
            .then(res => res.json())
            .then(data => setSatellites(data))
    }, [])

    const addSat = (sat) => {
        let faves;
        fetch(`http://localhost:8080/satellites/${sat.satelliteID}`)
            .then(res => res.json())
            .then(data => {
                faves = data[0].favorites;
            })
            .then(() => {
                fetch(`http://localhost:8080/satellites/favorites/${sat.satelliteID}`,
                    {
                        method: "PATCH",
                        mode: "cors",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            "favorites": faves + ' ' + userUID
                        })
                    })
            })
    }
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
                                        <ButtonContext.Provider value={addSat}>
                                            <ButtonToggle sat={sat} />
                                        </ButtonContext.Provider>
                                        <Link to={`/addreport/${sat.satelliteID}`} state={{ sat }}><button className="add"> Submit Report </button></Link>
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )

}