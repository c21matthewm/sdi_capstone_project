import React, { useState, useEffect, useContext, createContext } from 'react';
import { userContext } from '../App';
import { Link } from 'react-router-dom';
import '../SatelliteList/SatelliteList.css';
import { ButtonToggle } from './ButtonToggle';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { NavBar } from '../NavBar/NavBar';
import { Typography } from '@mui/material';

// import { Auth } from 'firebase/auth';
// import { auth } from '../firebase';

export const ButtonContext = createContext()

export const SatelliteList = () => {
    const [satellites, setSatellites] = useState([]);
    const { userUID } = useContext(userContext)

    // const { userSats, setUserSats } = useContext(userContext);
    // console.log(auth.user.uid)
    // const value = {addSat}

    useEffect(() => {
        fetch('http://localhost:8080/satellites')
            .then(res => res.json())
            .then(data => setSatellites(data))
    }, [])

    // const addSat = (sat) => {
    //     let faves;
    //     fetch(`http://localhost:8080/satellites/${sat.satelliteID}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             faves = data[0].favorites;
    //             // let temp = userUID.concat(faves)
    //             // console.log(data[0].favorites)
    //             // let currentUser = userUID
    //             // temp = faves + ' ' + userUID;
    //             // console.log(faves)
    //         })
    //         .then(() => {
    //             fetch(`http://localhost:8080/satellites/favorites/${sat.satelliteID}`,
    //                 {
    //                     method: "PATCH",
    //                     mode: "cors",
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                     },
    //                     body: JSON.stringify({
    //                         "favorites": faves + ' ' + userUID
    //                     })
    //                 })

    //             // setUserSats(prev => [...prev, sat])

    //         })
    // }

    // const CustomButton = () => {
    //     const [toggle, setToggle] = useState(false)
    //     return (
    //         <button onClick={()=>{setToggle(!toggle)}}> { toggle ? "added" : "add to dashboard" } </button>
    //     )
    // }

    return (
        <>
            <NavBar />
            <div className="list-container" >
                {/* <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', alignItems:"center" }}> */}
                <div className="list-sat">
                <Typography className="satT" variant="h5" gutterBottom>Satellite Index</Typography>    
                    <div className="box-list">
                    {satellites.map((sat, index) => {
                        return (

                            <ListItem className="sat-info" sx={{ boxShadow: 1, border: '1px solid grey' }} key={index}>

                                {/* <li className="satinfo" key={index}> */}
                                <ListItemButton component={Link} to={`/satellites/${sat.satelliteID}`} state={{ sat }}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <SatelliteAltIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={`${sat.name.toUpperCase()}`} />
                                    {/* <ButtonContext.Provider value={addSat}> */}
                                        <ButtonToggle sat={sat} />
                                    {/* </ButtonContext.Provider> */}
                                    {/* <button className="add" onClick={() => addSat(sat)}> Add to Dashboard </button> */}
                                    <Link to={`/addreport/${sat.satelliteID}`} state={{ sat }}><button className="add"> Submit Report </button></Link>
                                    {/* </li> */}
                                </ListItemButton>
                            </ListItem>

                        )
                    })}
                   </div>
                </div>
                {/* </Box> */}
            </div>
        </>
    )

}