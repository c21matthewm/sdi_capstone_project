import React, { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';
import { Link, useLocation } from 'react-router-dom';
import "./Satellite.css"

export const Satellite = (props) => {
    const location = useLocation();
    const { sat } = location.state;
    const { reports, setReports } = useContext(userContext);

    useEffect(() => {
        fetch(`http://localhost:8080/reports/satellites/${sat.satelliteID}`)
            .then(res => res.json())
            .then(data => setReports(data))
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
                <li> <img src = {sat.image} width={300}></img></li>
            </ul>
            <ul>
                {reports.map((report, index) => {
                    return (
                        <>
                            <li><Link to={`/reports/${report.reportID}`} state={{ report }}>REPORT #{`${report.reportID}`}: {report.time} </Link></li>
                        </>
                    )
                })}
            </ul>
        </div>

    )
}
