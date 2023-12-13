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

export const AdminDashboard = () => {

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
  //     console.log(userUID)
  //     userUID &&
  //         users.find((user) => {
  //             return user.uid === userUID ? setLoggedInUser(user) : console.log('no user found')
  //         })
  // }, []);

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <NavBar />
      <div className="big-container">
        <Typography variant="h5" component="div" >Dashboard</Typography>
        <div className="adminDisplay">
          <h3>ADMIN</h3>
          <Link to={`/addsatellite`}>
            <Button variant="contained" color="success">Add Satellite</Button>
          </Link>
          <div className="tileDisplay">
            {satellites.map((sat) => {
              return (
                <div className="tile">
                  <Box sx={{
                    boxShadow: 3, p: 2, border: sat.status === 'GREEN' ? "solid 2px #00ff00" :
                      sat.status === 'YELLOW' ? "solid 5px #facb6c" : "solid 5px #ff0000"
                  }} variant="outlined">
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
      </div>
    </>
  );
};

