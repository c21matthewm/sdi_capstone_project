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
import { EditStatus } from "../Satellite/EditStatus";
import { NavBar } from "../NavBar/NavBar";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { ListItemButton } from '@mui/material';
import { yellow } from '@mui/material/colors';
import { ButtonToggle } from "../SatelliteList/ButtonToggle";

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


	const handlePopupClose = () => {
		setPopupVisible(false);
	};

	return (
		<>
			<NavBar />
			<div className="big-container">
				<Typography variant="h5" component="div" > USER Dashboard</Typography>
				<div className="userDisplay">
					<Box className="tileDisplay" component="section" sx={{ boxShadow: 3, p: 2, border: '1px solid grey' }}>
						{satellites.filter((satellite) => satellite.favorites.includes(userUID)).map((sat) => {
							return (
								<div className="tile">
									<Box className="box" component="section" sx={{
										boxShadow: 3, p: 2, borderRadius: '10px', border: sat.status === 'GREEN' ? "solid 5px #00ff00" :
											sat.status === 'YELLOW' ? "solid 5px #facb6c" : "solid 5px #ff0000"
									}} variant="outlined">
										<CardActionArea >
											<Link to={`/satellites/${sat.satelliteID}`} state={{ sat }}>
												<CardMedia>
													<Box
														component="img"
														sx={{
														height: '95px',
														width: '120px',
														}}
														src={sat.image}
														alt="satellite image"
													/>
												</CardMedia>
												<CardContent >
													<Typography variant="h5" component="div" >
														{sat.name.toUpperCase()}
													</Typography >
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
					</Box>
				</div>
			</div>
		</>
	);
};

