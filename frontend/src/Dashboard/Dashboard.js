import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../App";
import './Dashboard.css';
import { AddSatellite } from './AddSatellite';

import { Link } from 'react-router-dom';
import { Button, CardActionArea, CardActions, CardMedia, Dialog } from '@mui/material';
import { Card, CardContent, Typography, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ReportIcon from '@mui/icons-material/Report';
import { EditStatus } from "../EditStatus/EditStatus";
import { NavBar } from "../NavBar/NavBar";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { ListItemButton } from '@mui/material';


export const Dashboard = () => {

	const { users, setUsers, 
			satellites, setSatellites, 
			reports, setReports,
            userSats, setUserSats,
			// loggedIn, setLoggedIn,
			// userIsAdmin, setUserIsAdmin,
            userUID, setUserUID,
            loggedInUser, setLoggedInUser } = useContext(userContext);
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedSat, setSelectedSat] = useState({});

    // useEffect(() => {
    //     console.log(selectedSat)
    //     console.log(popupVisible)
    // }, [selectedSat, popupVisible]);

    useEffect(() => {
        console.log(userUID)
        userUID &&
            users.find((user) => {
                return user.uid === userUID ? setLoggedInUser(user) : console.log('no user found')
            })
    }, []);

    const handlePopupClose = () => {
        setPopupVisible(false);
    };

  return (
		<>
	<NavBar/>
	
    {/* {loggedInUser &&
    <div>Logged in as {loggedInUser.name}</div>} */}
	<div className="big-container">
	<Typography variant="h5" component="div" >Dashboard</Typography>
		{/* <Button variant="contained" color="success" onClick={() => {setLoggedIn(false); setUserIsAdmin(false)}}>Logout</Button>
		<Button variant="contained" color="success" onClick={() => {setUserIsAdmin(false); setLoggedIn(true)}}>Make User</Button>
		<Button variant="contained" color="success" onClick={() => {setUserIsAdmin(true); setLoggedIn(true)}}>Make Admin</Button> */}
		{/* {userIsAdmin ? */}
        {loggedInUser && loggedInUser.admin ?
			<div className="adminDisplay">
				<h3>Logged in as {loggedInUser.name}</h3>
				<Link to={`/addsatellite`}>
					<Button variant="contained" color="success">Add Satellite</Button>
				</Link>
				<div className="tileDisplay">
					{satellites.map((sat) => {
						return (
							<div className="tile">
								<Box sx={{  boxShadow: 3, p: 2, border: sat.status === 'GREEN' ? "solid 2px #00ff00" :
                                        sat.status === 'YELLOW' ? "solid 5px #facb6c" : "solid 5px #ff0000"}} variant="outlined">
									<CardActionArea >
                                        <Link to={`/satellites/${sat.satelliteID}`} state={{ sat }}>
											<CardMedia>
												<Box
													component="img"
													sx={{
														height: 'auto',
														width: '100px',
													}}
													src={sat.image}
													alt="satellite image"
												/>
											</CardMedia>
											<CardContent >
												<Typography variant="h5" component="div" >
													{sat.name}
												</Typography >
												{/* add any other details later*/}
											</CardContent >
										</Link>
									</CardActionArea >
									<CardActions >
										<Button variant="contained" color="primary" onClick={() => {
                                            setPopupVisible(true);
                                            setSelectedSat(sat)
                                        }}>Edit status</Button>
                                        <Dialog open={popupVisible}
                                                onClose={() => {setPopupVisible(false)}}
                                                slotProps={{
                                                    backdrop: {
                                                        sx: {
                                                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                                        }
                                                    }
                                                }}
                                         >
                                            <EditStatus satellite={ selectedSat } onClose={ handlePopupClose }/>
                                        </Dialog>
                                    <Link to={`/satellites/${sat.satelliteID}`} state={{ sat }}>
                                        <Button variant="contained" color="secondary" endIcon={<ReportIcon />}>
                                            <Typography component="span">{reports.filter((report) => (report.satelliteID === sat.satelliteID)).length}</Typography>
                                        </Button>
                                    </Link>
									</CardActions >
								</Box >
							</div>
						)
					})}
				</div>
			</div>
		:
        loggedInUser && !loggedInUser.admin ?
			<div className="userDisplay">
				{/* <h3>User</h3> */}
				<Box className="tileDisplay" component="section" sx={{ boxShadow: 3, p: 2, border: '1px solid grey' }}>
				{/* <div className="tileDisplay"> */}
				{satellites.filter((satellite) => satellite.favorites.includes(loggedInUser.uid)).map((sat) => {
					return (
						<div className="tile">
							<Box className="box" component="section" sx={{ boxShadow: 3, p: 2, border: sat.status === 'GREEN' ? "solid 2px #00ff00" :
                                        sat.status === 'YELLOW' ? "solid 2px #facb6c" : "solid 2px #ff0000"}} variant="outlined">
								<CardActionArea >
									<Link to={`/satellites/${sat.satelliteID}`} state={{ sat }}>
										<CardMedia>
											<img src={sat.image} width={220} height={170} alt='sat'/>
										</CardMedia>
										<CardContent >
											<Typography variant="h5" component="div" >
												{sat.name.toUpperCase()}
											</Typography >
											{/* add any other details later*/}
										</CardContent >
									</Link>
								</CardActionArea >
								<CardActions >
									<Link to={`/addreport/${sat.satelliteID}`} state={{ sat }}>
                                        <Button variant="contained" color="success" >Add Report</Button>
                                    </Link>
                                    <Link to={`/satellites/${sat.satelliteID}`} state={{ sat }}>
                                        <Button variant="contained" color="secondary" endIcon={<ReportIcon />}>
                                            <Typography component="span">{reports.filter((report) => (report.satelliteID === sat.satelliteID)).length}</Typography>
                                        </Button>
                                    </Link>
								</CardActions >
							</Box >
						</div>
					)
				})}
				{/* </div> */}
				</Box>
			</div>
		: <h3>Not Logged In</h3>}
	</div>
	</>
  );
};


// Displays login and create account before login
// Displays all satellites chosen by the user for the user
// displays all satellites assigned to the admin for the admin
