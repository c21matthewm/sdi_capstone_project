import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../App";
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { Button, CardActionArea, CardActions, CardMedia, Dialog } from '@mui/material';
import { CardContent, Typography, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ReportIcon from '@mui/icons-material/Report';
import { NavBar } from "../NavBar/NavBar";


export const Dashboard = () => {

	const { satellites, reports, userUID, } = useContext(userContext);

	useEffect(() => {
		console.log('userUID: ', userUID)
	}, [])

	return (
		<>
			<NavBar />
			<div className="big-container">
				<Typography variant="h5" component="div" className="dashtitle" > USER Dashboard</Typography>
				<div className="userDisplay">
					<Box className="tileDisplay" component="section" sx={{ boxShadow: 3, p: 2, border: '1px solid grey', borderRadius: '10px' }}>
						{satellites.filter((satellite) => satellite.favorites.includes(userUID)).length === 0 ? <h2>No Satellites added to Dashboard</h2> :
							satellites.filter((satellite) => satellite.favorites.includes(userUID)).map((sat, index) => {
								return (
									<div id={index} className="tile">
										<Box className="box" component="section" sx={{ boxShadow: 3, p: 2, border: '1px solid grey', borderRadius: "10px" }}
											variant="outlined">
											<CardActionArea >
												<Link to={`/satellites/${sat.satelliteID}`} state={{ sat }}>
													<CardMedia>
														<Box
															component="img"
															sx={{
																height: '150px',
																width: '200px',
																margin: '20px 0 0 0',
															}}
															style={{
																border: sat.status === 'GREEN' ? "10px solid rgb(0, 200, 0)" :
																	sat.status === 'YELLOW' ? "10px solid rgb(255, 255, 100)" : "10px solid rgb(255, 30, 10)"
															}}
															src={sat.image}
															alt="satellite image"
														/>
													</CardMedia>
													<CardContent>
														<div className="sat-name">
															<Typography variant="h5" component="div" sx={{ margin: "0" }} >
																{sat.name.toUpperCase()}
															</Typography >
														</div>
													</CardContent>
												</Link>
											</CardActionArea>
											<CardActions className="buttons">
												<Link to={`/addreport/${sat.satelliteID}`} state={{ sat }}>
													<Button variant="contained" color="info" startIcon={<AddIcon />}>Add Report</Button>
												</Link>
												<Link to={`/satellites/${sat.satelliteID}`} state={{ sat }}>
													<Button variant="contained" color="secondary" endIcon={<ReportIcon />}>
														<Typography component="span">{reports.filter((report) =>
															report.satelliteID === sat.satelliteID &&
															report.archived === false).length}</Typography>
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