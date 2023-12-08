import React, { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "../Satellite/Satellite.css";

export const SatelliteList = () => {
    const [satellites, setSatellites] = useState([]);
    // const [userSats, setUserSats] = useState([]);
    const { userSats, setUserSats } = useContext(userContext);


    useEffect(() => {
        fetch('http://localhost:8080/satellites')
            .then(res => res.json())
            .then(data => setSatellites(data))
    }, [])

    const addSat = (sat) => {
        setUserSats(prev => [...prev, sat])
        console.log(userSats)
    }

    return (
        <div className="container">
            <ul>
                <h2>List of Satellites</h2>
                {satellites.map((sat, index) => {
                    return (
                        <li className="satinfo" key={index}>
                            <Link to={`/satellites/${sat.satelliteID}`} state={{ sat }}> Name: {sat.name} || status: {sat.status} </Link>
                            <button className="add" onClick={() => { addSat(sat) }}> Add to Dashboard  </button>
                            <Link to={`/addreport/${sat.satelliteID}`} state={{sat}}><button className="add"> Submit Report </button></Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}