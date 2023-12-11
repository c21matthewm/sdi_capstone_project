
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Home } from './pages/Home';
import React, { useContext, useState, useEffect } from 'react';
import { userContext } from '../App';
import './ReportList.css';
import MixedBarChart from './ProblemMetric'

function ReportList() {

  const allItems= useContext(userContext)
  // let arr = ['Hello', 'Hi', 'This']
  let arr = allItems.reports;

  console.log(arr)



  return (
    <div>
      <div className="reports_page">
        <h1>Reports Page</h1>
        < MixedBarChart/>
        <input type='search' placeholder='Search Satellite' />

        <select>
          <option>Filter</option>
          <option>Subscribed Satellities</option>
          <option>Option</option>
          <option>Option</option>
        </select>
        <div className="report_view">
          THIS IS THE REPORT PANEL.
          <ul>
            {arr.map((report) => {
              // {console.log('Hello', report)
              // console.log('Hi',index, report[index])}
              return (
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
        </div>
        <div className="metric_view">
          THIS IS THE METRIC PANEL.
          <div className="problems_metric">

          </div>
          <div className="SATCOM_down_metric"></div>
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


