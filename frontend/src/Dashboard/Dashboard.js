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
import { yellow } from '@mui/material/colors';

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

	// useEffect(() => {
	// 	console.log(userUID)
	// 	userUID &&
	// 		users.find((user) => {
	// 			return user.uid === userUID ? setLoggedInUser(user) : console.log('no user found')
	// 		})
	// }, []);

	const handlePopupClose = () => {
		setPopupVisible(false);
	};

	return (
		<>
			<NavBar />
			<h2>USER DASH</h2>
			{/* {loggedInUser &&
    <div>Logged in as {loggedInUser.name}</div>} */}
			<div className="big-container">
				<Typography variant="h5" component="div" >Dashboard</Typography>
				<div className="userDisplay">
					{/* <h3>User</h3> */}
					<Box className="tileDisplay" component="section" sx={{ boxShadow: 3, p: 2, border: '1px solid grey' }}>
						{/* <div className="tileDisplay"> */}
						{satellites.filter((satellite) => satellite.favorites.includes(userUID)).map((sat) => {
							return (
								<div className="tile">
									<Box className="box" component="section" sx={{
										boxShadow: 3, p: 2, border: sat.status === 'GREEN' ? "solid 2px #00ff00" :
											sat.status === 'YELLOW' ? "solid 2px #facb6c" : "solid 2px #ff0000"
									}} variant="outlined">
										<CardActionArea >
											<Link to={`/satellites/${sat.satelliteID}`} state={{ sat }}>
												<CardMedia>
													<img src={sat.image} width={220} height={170} alt='sat' />
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
			</div>
		</>
	);
};


// Displays login and create account before login
// Displays all satellites chosen by the user for the user
// displays all satellites assigned to the admin for the admin
