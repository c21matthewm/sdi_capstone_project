import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { Home } from './pages/Home';
import React, { createContext, useState, useEffect } from 'react';
import { SatelliteList } from './SaltelliteList/SatelliteList';
import { Satellite } from './Satellite/Satellite';
import { Dashboard } from './Dashboard/Dashboard';
import { AddReport } from './AddReport/AddReport';
import { Report } from './Report/Report';
import { NavBar } from './NavBar/NavBar';
import { AuthDetails } from './AuthDetails';
import { Login } from './Login/Login';
import { SignUp } from './SignUp/SignUp';
import ReportList from './ReportList/ReportList';
import { EditStatus } from './EditStatus/EditStatus';

export const userContext = createContext();
function App() {
  const [users, setUsers] = useState([]);
  const [satellites, setSatellites] = useState([]);
  const [reports, setReports] = useState([]);
  const [userSats, setUserSats] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userIsAdmin, setUserIsAdmin] = useState(false);

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
      users, setUsers,
      satellites, setSatellites,
      reports, setReports,
      userSats, setUserSats,
      loggedIn, setLoggedIn,
      userIsAdmin, setUserIsAdmin
    }}>
      <NavBar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/satellites' element={<SatelliteList />} />
        <Route path='/satellites/:id' element={<Satellite />} />
        <Route path='/reports' element={<ReportList/>} />
        <Route path='/reports/:id' element={<Report />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/addreport/:id' element={<AddReport />} />
        <Route path='/' element={<AuthDetails />} /> 
        <Route path='/editstatus' element={<EditStatus />} />
      </Routes>


    </userContext.Provider>
  )
    
}
        

export default App;



// Home.js - login page (conditionally render login, once logged in, renders Dashboard.js)
    // Login.js - login form
    // SignUp.js - create account form
    // Authorization.js - displays on Home.js once logged in
    // Dashboard.js - displays on Home.js of satellites that admin owns / for users it displays all satellites theyve added
    // NavBar.js - Home / SattelliteList


// SatelliteList.js - displays all satellites, ability to add and remove satellites to dashboard
    // Satellite.js - displays satellite information
    // AddReport.js - add a report to a satellite


// ReportList.js - list of all reports for a satellite
    // Report.js - report information


