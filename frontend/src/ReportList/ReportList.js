
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Home } from './pages/Home';
import React, { useContext, useState, useEffect } from 'react';
import { userContext } from '../App';
// import PieCenterLabel from './PieChart';
import './ReportList.css';
import MixedBarChart from './ProblemMetric'
import { NavBar } from '../NavBar/NavBar';

function ReportList() {


  const allItems= useContext(userContext)
  // let arr = ['Hello', 'Hi', 'This']
  let arr = allItems.reports;
  // let id = allItems.reports.satelliteID;

  let allSatellites= allItems.satellites
  const [selectedFruit, setSelectedFruit] = useState(true)

  // switch(id) {
  //   case 1:
  //     id = 'insight_1'
  //   break;

  // }
  // console.log('id', id)



  return (


    <div>
      <NavBar/>
      <h1>Reports Page</h1>

      <div className="reports_page">

        <div className="report_view">
          <h3>THIS IS THE REPORT PANEL.</h3>
          <input type='search' placeholder='Search Satellite' />

          <select  onChange={e => setSelectedFruit(e.target.value)}>
            <option>Filter</option>
            <option>Subscribed Satellities</option>
            <option>My Reports</option>
            <option>Option</option>
          </select>
          {selectedFruit ?
            <ul>
              
              {arr.map((report) => {
                // {console.log('Hello', report)
                // console.log('Hi',index, report[index])}
                return (
                    /* MUI <Select /> component ^^ */



                    <li key={report.reportID}>
                      <b>Satellite:</b> {` Insight ${report.satelliteID}`}
                      <br />
                      <b>User Access to SATCOM:</b> {` ${report.status}`}
                      <br />
                      <b>Description:</b> {` ${report.reason}`}
                      <br />
                      <b>User status on:</b> {` ${report.time}`}
                      {/* Add A state that takes the number of times the a report was filed and display it here*/}
                    </li>

                )
              })}
            </ul>
          :
          <p>this worked</p>}
          </div>
          <div className="metric_view">
            <p>THIS IS THE METRIC PANEL.</p>

            < MixedBarChart/>
            {allSatellites.map((satellite) => {
              return(
                <section>
                  <h3>{` Insight ${satellite.satelliteID}`}</h3>
                  {/* <PieCenterLabel/> */}
                </section>
              )
            })}
          


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


