import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../App';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Satellite.css"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { NavBar } from '../NavBar/NavBar';
import { Chart } from './Chart';
import { Button } from '@mui/material';

export const Satellite = (props) => {
    const location = useLocation();
    const { sat } = location.state;
    const { reports } = useContext(userContext);
    const navigate = useNavigate();
    const xdata = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const [seriesData, setSeriesData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    useEffect(() => {
        let newSeriesData = [...seriesData];
        reports.length === 0 ? fetch(`http://localhost:8080/reports`)
            .then((res) => res.json())
            .then((data) => {
                data.filter((report) =>
                    report.satelliteID === sat.satelliteID && !report.archived)
                    .forEach(rpt => {
                        let date = new Date(rpt.time);
                        let month = date.getMonth();
                        newSeriesData[month] += 1;
                        setSeriesData(newSeriesData);
                    })
            })
            :
            reports.filter((report) =>
                report.satelliteID === sat.satelliteID && !report.archived)
                .forEach(rpt => {
                    let date = new Date(rpt.time);
                    let month = date.getMonth();
                    newSeriesData[month] += 1;
                    setSeriesData(newSeriesData);
                })
    }, [sat.satelliteID]);

    return (
        <>
            <NavBar />
            <div className="sat-full">
                {/* <div className="sat-full">
                <Box className="box" component="section" sx={{ p: 2 }}>
                    <div className="sat-container">
                        <div className="sat-box"> */}
                <div className="sat-container">
                    <Box className="sat-box" sx={{ boxShadow: 3, p: 2, border: '1px solid grey', borderRadius: '10px' }}>
                       
                        <Typography variant="h5"sx={{ p: 1 }}  gutterBottom>{sat.name.toUpperCase()} <Button id="return" variant='contained' color='primary' onClick={() => navigate(-1)}>RETURN</Button></Typography>
                        <img className="sat-image"src={sat.image}  alt="satellite"></img>
                        {/* </div> */}
                        {/* <div className="components"> */}
                        <List>
                            <Typography variant="h6" gutterBottom display="inline" >Status:
                                <Typography variant="h6" display="inline"
                                    color={sat.status === 'GREEN' ? "#0FFF50" :
                                        sat.status === 'YELLOW' ? "rgb(255, 255, 100)" : "rgb(255, 30, 10)"}> {sat.status.toUpperCase()}</Typography> </Typography>
                            <ListItem >
                                <Typography variant="h7" gutterBottom>{`Orbit: ${sat.orbit}`} </Typography>
                            </ListItem >
                            <ListItem >
                                <Typography variant="h7" gutterBottom>{`Frequency Band: ${sat.frequency_band}`} </Typography>
                            </ListItem>
                            <ListItem >
                                <Typography variant="h7" gutterBottom>{`Longitude: ${sat.longitude}`} </Typography>
                            </ListItem>
                            <ListItem >
                                <Typography variant="h7" gutterBottom>{`Mission: ${sat.mission}`}</Typography>
                            </ListItem>
                            <ListItem >
                                <Typography variant="h7" gutterBottom>{`Country: ${sat.country}`}</Typography>
                            </ListItem>
                        </List>
                   
                    </Box>
                </div>

                {/* </div>
                            // </Box>
                        </div> */}
                {/* <div className="stacked"> */}
                {/* <Box className="report-box" component="section" sx={{ boxShadow: 3, p: 2, border: '1px solid grey', borderRadius: '10px' }}>
                                <div className="components" id="reports"> */}
                <div className="section">
                    <Box className="report-box" sx={{ boxShadow: 3, p: 2, border: '1px solid grey', borderRadius: '10px' }}>
                        <Typography variant="h6" gutterBottom> Recent Reports:</Typography>
                        {reports.filter((report) =>
                            report.satelliteID === sat.satelliteID &&
                            report.archived === false)
                            .map((report, index) => {
                                return (
                                    <div className="reportlist">
                                        <List  component={Link} to={`/reports/${report.reportID}`} state={{ report, sat }}>
                                            <ListItemText key={index} primary={`REPORT#${report.reportID}: ${report.time}`} />
                                        </List>
                                    </div>
                                )
                            })}
                        {/* </div> */}
                        {/* </Box> */}
                        {/* <div className="chart-box" > */}
                    </Box>
                    <Box className="chart-box" component="section" sx={{ boxShadow: 3, p: 2, border: '1px solid grey', borderRadius: '10px' }}>
                        <Chart state={{ sat }} xdata={xdata} seriesData={seriesData} />
                    </Box>
                    {/* </div> */}
                </div>

                {/* </div>
                    </div>
                </Box>
            </div> */}
            </div>
        </>

    )
}
