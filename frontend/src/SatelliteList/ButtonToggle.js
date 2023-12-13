import React, { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';
import { Link } from 'react-router-dom';
import "../Satellite/Satellite.css";
import { ButtonContext } from './SatelliteList';

export const ButtonToggle = ({ sat }) => {
    const { userUID } = useContext(userContext)
    // const { addSat } = useContext(ButtonContext)
    const [toggle, setToggle] = useState(false)

    const addSat = (sat) => {
        let faves;
        fetch(`http://localhost:8080/satellites/${sat.satelliteID}`)
            .then(res => res.json())
            .then(data => {
                faves = data[0].favorites;
                // let temp = userUID.concat(faves)
                // console.log(data[0].favorites)
                // let currentUser = userUID
                // temp = faves + ' ' + userUID;
                // console.log(faves)
            })
            .then(() => {
                fetch(`http://localhost:8080/satellites/favorites/${sat.satelliteID}`,
                    {
                        method: "PATCH",
                        mode: "cors",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            "favorites": faves + ' ' + userUID
                        })
                    })

                // setUserSats(prev => [...prev, sat])

            })
    }

    return (
        <button className="add" onClick={() => { setToggle(!toggle); addSat(sat) }}>{toggle ? "Added" : "Add to Dashboard"}</button>
    )

}