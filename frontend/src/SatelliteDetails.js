import React, { useState, useEffect, useContext } from 'react';
import { userContext } from './App';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

export const SatelliteDetails = (props) => {

    const location = useLocation() ;

    // const {state} = props.location ;
    const {sat} = location.state ;

    // useEffect(() => {
    //     fetch('http://localhost:8080/satellites')
    //     .then(res => res.json())
    //     .then(data => setSatellites(data))

    // })


    return(
        <h2>Hello {sat.name} {sat.longitude} {sat.status} </h2>
    )
}
