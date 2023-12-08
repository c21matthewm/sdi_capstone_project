import React, { useState, useEffect, useContext } from 'react';
import { userContext } from './App';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export const SatelliteList = () =>  {
    const [satellites, setSatellites] = useState([]);
    // const [userSats, setUserSats] = useState([]);
    const {userSats, setUserSats} = useContext(userContext);


    useEffect(() => {
        fetch('http://localhost:8080/satellites')
        .then(res => res.json())
        .then(data => setSatellites(data))

    })

    const addSat = (sat) => {
        setUserSats(prev => [...prev, sat])
        console.log(userSats)
    }


    return (
        <>
        <h2>List of Satellites</h2>
        <ul>
        {satellites.map(sat => {
            return ( 
                <li> 
                <Link to={`/satellites/${sat.satelliteID}`} state = {{sat}}> {sat.status} {sat.name}</Link>
                <button onClick={() => {addSat(sat)}}> Add to Dashboard  </button>
                </li>
            )
        })}
        </ul>
        </>
    )

}