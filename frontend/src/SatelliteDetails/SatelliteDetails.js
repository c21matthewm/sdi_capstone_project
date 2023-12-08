import React, { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import "./Satellite.css"

export const SatelliteDetails = (props) => {
    const location = useLocation();
    const { sat } = location.state;
    // const [reports, setReports] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/reports/satellites/${sat.satelliteID}`)
            .then(res => res.json())
            // .then(data => setReports(data))
    }, [sat]);


    return (
        <div className="container">
            <ul>
                <li><h2>Hello {sat.name}</h2></li>
                <li> longitude: {sat.longitude}</li>
                <li> status: {sat.status}</li>
                <li> orbit: {sat.orbit}</li>
                <li> mission: {sat.mission}</li>
                <li> country: {sat.country}</li>
                <li> frequency_band: {sat.frequency_band}</li>
            </ul>
            {/* <ul>
                {reports.map(report => {
                    return (
                        <>
                            <li> {report.time} </li>
                            <li> {report.latitude} </li>
                            <li> {report.longitude} </li>
                            <li> {report.frequency_band} </li>
                            <li> {report.mission} </li>
                            <li> {report.status} </li>
                            <li> {report.reason} </li>
                        </>
                    )
                })}
            </ul> */}
        </div>

    )
}
