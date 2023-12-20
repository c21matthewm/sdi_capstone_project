import React, { useContext, useState } from "react";
import { userContext } from "../App";
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { Button, CardActionArea, CardActions, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { CardContent, Typography, Box } from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';
import DeleteIcon from '@mui/icons-material/Delete';
import { EditStatus } from "../Satellite/EditStatus";
import { NavBar } from "../NavBar/NavBar";

export const AdminDashboard = () => {

  const { satellites, reports, userUID } = useContext(userContext);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedSat, setSelectedSat] = useState({});
  const [deletePopupVisible, setDeletePopupVisible] = useState(false);
  const [satelliteToDelete, setSatelliteToDelete] = useState(null);

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  const handleDeletePopupClose = () => {
    setDeletePopupVisible(false);
  }

  const confirmDelete = (satellite) => {
    setSatelliteToDelete(satellite);
    setDeletePopupVisible(true);
  }

  const deleteSatellite = () => {
    fetch(`http://localhost:8080/satellites/${satelliteToDelete.satelliteID}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
    setDeletePopupVisible(false);
  };

  return (
    <>
      <NavBar />
      <Dialog open={deletePopupVisible} onClose={handleDeletePopupClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {satelliteToDelete?.name}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" onClick={deleteSatellite}>Yes</Button>
          <Button variant="contained" color="error" onClick={handleDeletePopupClose}>No</Button>
        </DialogActions>
      </Dialog>
      <div className="big-container">
        <Typography variant="h5" component="div" ><span className="dashtitle">ADMIN Dashboard</span> <Link to={`/addsatellite`}>
          <Button variant="contained" color="info">Add Satellite</Button>
        </Link></Typography>
        <div className="adminDisplay">
          <Box className="tileDisplay" component="section" sx={{ boxShadow: 3, p: 2, border: '1px solid grey', borderRadius: '10px' }}>
            {satellites.filter((satellite) => satellite.favorites.includes(userUID)).map((sat, index) => {
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
                              margin: '20px 0 0 0'
                            }}
                            style={{
                              border: sat.status === 'GREEN' ? "10px solid rgb(0, 200, 0)" :
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
                      }}>EDIT STATUS</Button>
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
                      <Button variant="contained" color="error" onClick={() => confirmDelete(sat)}><DeleteIcon /></Button>
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
}