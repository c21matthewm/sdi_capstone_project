import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { createContext, useState, useEffect } from 'react';
import { SatelliteList } from './SatelliteList/SatelliteList';
import { Satellite } from './Satellite/Satellite';
import { Dashboard } from './Dashboard/Dashboard';
import { AddReport } from './Report/AddReport';
import { Report } from './Report/Report';
import { AuthDetails } from './Authorizations/AuthDetails';
import { Login } from './Authorizations/Login';
import { SignUp } from './Authorizations/SignUp';
import ReportList from './ReportList/ReportList';
import { EditStatus } from './Satellite/EditStatus';
import { SubmitReport } from './Report/SubmitReport';
import { AddSatellite } from './Dashboard/AddSatellite';

export const userContext = createContext();
function App() {
  const [users, setUsers] = useState([]);
  const [satellites, setSatellites] = useState([]);
  const [reports, setReports] = useState([]);
  const [userSats, setUserSats] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userIsAdmin, setUserIsAdmin] = useState(false);
  const [userUID, setUserUID] = useState('');
  const [authUser, setAuthUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

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
      userIsAdmin, setUserIsAdmin,
      userUID, setUserUID,
      authUser, setAuthUser,
      loggedInUser, setLoggedInUser
    }}>

      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/satellites' element={<SatelliteList />} />
        <Route path='/satellites/:id' element={<Satellite />} />
        <Route path='/reports' element={<ReportList />} />
        <Route path='/reports/:id' element={<Report />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/addreport/:id' element={<AddReport />} />
        <Route path='/' element={<AuthDetails />} />
        <Route path='/editstatus' element={<EditStatus />} />
        <Route path='/addreport/' element={<SubmitReport />} />
        <Route path='/addsatellite' element={<AddSatellite />} />
      </Routes>
    </userContext.Provider>
  )
}

export default App;
