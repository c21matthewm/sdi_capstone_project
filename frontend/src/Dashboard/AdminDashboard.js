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

  const { satellites, reports } = useContext(userContext);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedSat, setSelectedSat] = useState({});

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <NavBar />
      <div className="big-container">
        <Typography variant="h5" component="div" >ADMIN Dashboard</Typography>
        <div className="adminDisplay">
          <Link to={`/addsatellite`}>
            <Button variant="contained" color="success">Add Satellite</Button>
          </Link>
          <div className="tileDisplay">
            {satellites.map((sat, index) => {
              return (
                <div id={index} className="tile">
                  <Box sx={{
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
                            {sat.name}
                          </Typography >
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

