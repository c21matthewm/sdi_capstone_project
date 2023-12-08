import React, { useContext, useState } from "react";
import { userContext } from "../App";
import './Dashboard.css';

import { Link } from 'react-router-dom';
import { Button, CardActionArea, CardActions, CardMedia } from '@mui/material';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ReportIcon from '@mui/icons-material/Report';
import { EditStatus } from "../EditStatus/EditStatus";



export const Dashboard = () => {

	const { users, setUsers, 
			satellites, setSatellites, 
			reports, setReports,
            userSats, setUserSats,
			loggedIn, setLoggedIn,
			userIsAdmin, setUserIsAdmin } = useContext(userContext);
    const [popupVisible, setPopupVisible] = useState(false);


  return (
	<div className="big-container">
		<h2>Dashboard</h2>
		<Button variant="contained" color="success" onClick={() => {setLoggedIn(false); setUserIsAdmin(false)}}>Logout</Button>
		<Button variant="contained" color="success" onClick={() => {setUserIsAdmin(false); setLoggedIn(true)}}>Make User</Button>
		<Button variant="contained" color="success" onClick={() => {setUserIsAdmin(true); setLoggedIn(true)}}>Make Admin</Button>
		{userIsAdmin ?
			<div className="adminDisplay">
				<h3>Admin</h3>
				<div className="tileDisplay">
					{satellites.map((sat) => {
						return (
							<div className="tile">
								<Card sx={{ border: sat.status === 'active' ? "solid 5px #00ff00" : "solid 5px #ff0000"}} variant="outlined">
									<CardActionArea >
                                        <Link to={`/satellites/${sat.satelliteID}`} state={{ sat }}>
											<CardMedia>
												<p>Sat Image</p>
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
										<Button variant="contained" color="primary" onClick={setPopupVisible(true)}>Edit status</Button>
                                    <Link to={`/satellites/${sat.satelliteID}`} state={{ sat }}>
                                        <Button variant="contained" color="secondary" endIcon={<ReportIcon />}>
                                            <Typography component="span">{reports.filter((report) => (report.satelliteID === sat.satelliteID)).length}</Typography>
                                        </Button>
                                    </Link>
									</CardActions >
								</Card >
							</div>
						)
					})}
				</div>
			</div>
		:
		loggedIn ?
			<div className="userDisplay">
				<h3>User</h3>
				<div className="tileDisplay">
				{userSats.map((sat) => {
					return (
						<div className="tile">
							<Card sx={{ border: sat.status === 'active' ? "solid 5px #00ff00" : "solid 5px #ff0000"}} variant="outlined">
								<CardActionArea >
									<Link to={`/satellites/${sat.satelliteID}`} state={{ sat }}>
										<CardMedia>
											<p>Sat Image</p>
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
									<Link to={`/addreport/${sat.satelliteID}`} state={{ sat }}>
                                        <Button variant="contained" color="success" endIcon={<AddIcon />}>Add Report</Button>
                                    </Link>
                                    <Link to={`/satellites/${sat.satelliteID}`} state={{ sat }}>
                                        <Button variant="contained" color="secondary" endIcon={<ReportIcon />}>
                                            <Typography component="span">{reports.filter((report) => (report.satelliteID === sat.satelliteID)).length}</Typography>
                                        </Button>
                                    </Link>
								</CardActions >
							</Card >
						</div>
					)
				})}
				</div>
			</div>
		: <h3>Not Logged In</h3>}
        {popupVisible && 
            <div className="popup-window">
                <EditStatus />
            </div>
        }
	</div>
  );
};


// Displays login and create account before login
// Displays all satellites chosen by the user for the user
// displays all satellites assigned to the admin for the admin
