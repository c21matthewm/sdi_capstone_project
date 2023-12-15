
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Home } from './pages/Home';
import React, { useContext, useState, useEffect } from 'react';
import { Select, MenuItem, InputLabel, Divider, TextField, Box , Button, OutlinedInput } from '@mui/material';
import ArchiveIcon from '@mui/icons-material/Archive';
import { userContext } from '../App';
// import PieCenterLabel from './PieChart';
import './ReportList.css';
import MixedBarChart from './ProblemMetric'
import { NavBar } from '../NavBar/NavBar';
import SatelliteDropDown from './SatelliteDropDown';

function ReportList() {


  const {satellites, reports, setReports}= useContext(userContext)
  const [selectedFilter, setSelectedFilter] = useState('')
  const [searchValue, setSearchValue] = useState('')

  // const archiveReport = (e, report) => {
  //   fetch(`http://localhost:8080/reports/archived/${report.reportID}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       archived: e.target.value
  //     })
  //   })
  //   Fetch and use post method to change the status of the report to archived
  //   but do not delete the report from the database
  // }


  return (
    <div>
      <NavBar/>
      <h1>Reports Page</h1>

      <div className="reports_page">

        <div className="report_view">
          <h3>THIS IS THE REPORT PANEL.</h3>

          <InputLabel>Search: </InputLabel>
          {/* change input label to <Select /> component with different categories
              of values to search, the user selects "Satellite", it should
              search the satellite name field when conditionally rendering
              the list */}
            <TextField id='search'
                      variant="outlined"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      // style={{height: '30px'}}
                      />
          <Divider />

          <InputLabel id="filter-label">Filter By: </InputLabel>
            <Select id="filter"
                    value={selectedFilter}
                    name="not_sure"
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    style={{height: '30px'}}
            >
              <MenuItem value="" disabled>Filter By</MenuItem>
              <MenuItem value="Subscribed Satellites">Subscribed Satellites</MenuItem>
              <MenuItem value="Date">Date</MenuItem>
              <MenuItem value="Status">Status</MenuItem>
              <MenuItem value="Satellite">Satellite</MenuItem>
            </Select>

          {/* <input type='search' placeholder='Search Satellite' />

          <select  onChange={e => setSelectedFruit(e.target.value)}>
            <option>Filter</option>
            <option>Subscribed Satellities</option>
            <option>My Reports</option>
            <option>Option</option>
          </select> */}
          {selectedFilter ? (
            <Box sx={{ margin: '20px 0' }}>
              {/* only the date filter works right now, the .sort or .filter needs to be conditional */}
              {reports.sort((a, b) => new Date(b.time) - new Date(a.time))
              .map((report) => (
                <Box key={report.reportID} sx={{ mb: 2 }}>
                  <b>Satellite: </b> {`Insight ${report.satelliteID}`}
                  <br />
                  <b>User Access to SATCOM: </b> {`${report.status}`}
                  <br />
                  <b>Description: </b> {`${report.reason}`}
                  <br />
                  <b>User status on: </b> {`${report.time}`}
                  <br />
                  <Button variant='contained' color='primary' endIcon={<ArchiveIcon />}>Archive</Button>
                </Box>

              ))}
            </Box>
            ) : (
            <Box sx={{ margin: '20px 0' }}>
              {reports.map((report) => (
                <Box key={report.reportID} sx={{ mb: 2 }}>
                  <b>Satellite: </b> {`Insight ${report.satelliteID}`}
                  <br />
                  <b>Status: </b> {`${report.status}`}
                  <br />
                  <b>Description: </b> {`${report.reason}`}
                  <br />
                  <b>Time: </b> {`${report.time}`}
                  <br />
                  <Button variant='contained' color='primary' endIcon={<ArchiveIcon />}
                    >Archive</Button>
                </Box>
              ))}
            </Box>
          )}
          </div>
          <div className="metric_view">
            <p>THIS IS THE METRIC PANEL.</p>

            < MixedBarChart/>
            <section>
              <h3 style={{ display: 'flex'}}>Satellite Status</h3>

                      <SatelliteDropDown/>

            </section>


        </div>
      </div>
    </div>
  );
}

export default ReportList;



// Home.js - login page (conditionally render login, once logged in, renders Dashboard.js)
    // Login.js - login form
    // CreateAccount.js - create account form
    // Authorization.js - displays on Home.js once logged in
    // Dashboard.js - displays on Home.js of satellites that admin owns / for users it displays all satellites theyve added
    // NavBar.js - Home / SattelliteList


// SatelliteList.js - displays all satellites, ability to add and remove satellites to dashboard
    // Satellite.js - displays satellite information
    // AddReport.js - add a report to a satellite


// ReportList.js - list of all reports for a satellite
    // Report.js - report information


