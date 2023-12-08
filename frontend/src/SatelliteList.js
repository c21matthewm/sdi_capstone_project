import React, { useState, useEffect, useContext } from 'react';
import { userContext } from './App';

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
        {satellites.map(sat => {
            return ( 
                <> 
                <h2>Name: {sat.name}</h2>
                <button onClick={() => {addSat(sat)}}> Add to Dashboard  </button>
                </>
            )
        })}
        </>
    )

}