import React, { useContext, useState } from "react";
import { userContext } from "../App";
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { Button, CardActionArea, CardActions, CardMedia, Dialog } from '@mui/material';
import { CardContent, Typography, Box } from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';
import { EditStatus } from "../Satellite/EditStatus";
import { NavBar } from "../NavBar/NavBar";

export const AdminDashboard = () => {

  const { satellites, reports, userUID } = useContext(userContext);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedSat, setSelectedSat] = useState({});

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <NavBar />
      <div className="big-container">
        <Typography variant="h5" component="div" ><div className="dashtitle">ADMIN Dashboard</div></Typography>
        <div className="adminDisplay">
          <Link to={`/addsatellite`}>
            <Button variant="contained" color="info">Add Satellite</Button>
          </Link>
          <div className="tileDisplay">
          {satellites.filter((satellite) => satellite.favorites.includes(userUID)).map((sat, index) => {
              return (
                <div id={index} className="tile">
                 		<Box className="box" component="section" sx={{ boxShadow: 3, p: 2, border: '1px solid grey', borderRadius:"10px"}} 
									// style={{backgroundColor: sat.status === 'GREEN' ? "rgb(50, 200, 70, .8)" :
									// 		sat.status === 'YELLOW' ? "#facb6c" : "rgb(255, 0, 0, .8)"
									// 	}}
									variant="outlined">
                    <CardActionArea >
                      <Link to={`/satellites/${sat.satelliteID}`} state={{ sat }}>
                        <CardMedia>
                          <Box
                            component="img"
                            sx={{
                              height: '150px',
                              width: '200px',
                              margin: '20px 0 0 0' }}
														style={{border: sat.status === 'GREEN' ? "10px solid rgb(0, 200, 0)" :
											sat.status === 'YELLOW' ? "10px solid rgb(255, 255, 100)" : "10px solid rgb(255, 30, 10)"
                            }}
                            src={sat.image}
                            alt="satellite image"
                          />
                        </CardMedia>
                        <CardContent >
                        <div className="sat-name">
                          <Typography variant="h5" component="div" >
                            {sat.name.toUpperCase()}
                          </Typography >
                        </div>
                        </CardContent >
                      </Link>
                    </CardActionArea >
                    <CardActions className="buttons">
                      <Button variant="contained" color="primary" onClick={() => {
                        setPopupVisible(true);
                        setSelectedSat(sat)
                      }}>Edit status</Button>
                      <Dialog open={popupVisible}
                        onClose={() => { setPopupVisible(false) }}
                        slotProps={{
                          backdrop: {
                            sx: {
                              backgroundColor: 'rgba(0, 0, 0, 0.1)',
                            }
                          }
                        }}
                      >
                        <EditStatus satellite={selectedSat} onClose={handlePopupClose} />
                      </Dialog>
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
          </div>
        </div>
      </div>
    </>
  );
};

