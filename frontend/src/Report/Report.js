import React, { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { userContext } from "../App";
import ListItemButton from '@mui/material/ListItemButton';
import { Button, Divider } from '@mui/material';
import { useNavigate } from "react-router-dom";
import "./Report.css";

export const Report = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { report, sat } = location.state;
  const { reports } = useContext(userContext)

  return (
    <>
      <NavBar />
      <Box className="box" id="flex-report" component="section" sx={{ p: 2 }}>
        <Box className="box" id="report-box" component="section" sx={{ boxShadow: 3, p: 2, border: '1px solid grey', borderRadius: '10px' }}>
          <div className="align-com" >
            <Typography className="t-report" variant="h5" gutterBottom>REPORT #{report.reportID}   <Button id="return" variant='contained' color='primary' onClick={() => navigate(-1)}>RETURN</Button></Typography>
            <Divider></Divider>
            <List sx={{ p: 0, m: 0 }} component="nav">
              <ListItem>
                <Typography variant="h6" gutterBottom>{`Satellite: ${sat.name.toUpperCase()}`} </Typography>
              </ListItem >
              <ListItem>
                <Typography variant="h6" gutterBottom>{`Status: ${report.status.toUpperCase()}`} </Typography>
              </ListItem >
              <ListItem>
                <Typography variant="h6" gutterBottom>{`Time: ${report.time}`} </Typography>
              </ListItem >
              <ListItem>
                <Typography variant="h6" gutterBottom>{`Frequency Band: ${report.frequency_band}`}</Typography>
              </ListItem >
              <ListItem>
                <Typography variant="h6" gutterBottom>{`Latitude: ${report.latitude}`} </Typography>
              </ListItem >
              <ListItem>
                <Typography variant="h6" gutterBottom>{`Longitude: ${report.longitude}`} </Typography>
              </ListItem >
              <ListItem>
                <Typography variant="h6" gutterBottom>{`Mission: ${report.mission}`} </Typography>
              </ListItem >
              <ListItem>
                <Typography variant="h6" gutterBottom>{`Reason: ${report.reason}`} </Typography>
              </ListItem >
            </List>
          </div>
        </Box>
        <Box className="box" id="reports-side" component="section" sx={{ boxShadow: 3, p: 2, border: '1px solid grey', borderRadius: '10px' }}>
          <div className="components" >
            <Typography variant="h6" gutterBottom> {sat.name.toUpperCase()} Reports:</Typography>
            {reports.filter((report) => (report.satelliteID === sat.satelliteID))
              .map((report, index) => {
                return (
                  <>
                    <ListItemButton component={Link} to={`/reports/${report.reportID}`} state={{ report, sat }}>
                      <ListItemText primary={`REPORT#${report.reportID}: ${report.time}`} />
                    </ListItemButton>
                  </>
                )
              })}
          </div>
        </Box>
      </Box>
    </>
  )
}