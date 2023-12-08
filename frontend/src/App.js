import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Home } from './pages/Home';
import React, { createContext, useState, useEffect } from 'react';
import { SatelliteList } from './SatelliteList';

export const userContext = createContext();

function App() {

  const [users, setUsers] = useState([]);
  const [satellites, setSatellites] = useState([]);
  const [reports, setReports] = useState([]);
  const [userSats, setUserSats] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:8080/users').then((res) => res.json()),
      fetch('http://localhost:8080/satellites').then((res) => res.json()),
      fetch('http://localhost:8080/reports').then((res) => res.json()),
    ])
    .then(([users, satellites, reports]) => {
      setUsers(users);
      setSatellites(satellites);
      setReports(reports);
    });
  });

  return (

    <userContext.Provider value={{
      users,
      setUsers,
      satellites,
      setSatellites,
      reports,
      setReports,
      userSats,
      setUserSats
    }}>
      <div className="App">
        <h1>SDI Capstone Project</h1>
        <SatelliteList />
      </div>
    </userContext.Provider>
  );
}

export default App;



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


