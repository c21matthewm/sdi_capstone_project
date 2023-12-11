import React, { useState, useEffect, useContext, createContext } from 'react';
import { userContext } from '../App';
import { Link } from 'react-router-dom';
import "../Satellite/Satellite.css";
import { ButtonToggle } from './ButtonToggle';
// import { Auth } from 'firebase/auth';
// import { auth } from '../firebase';

export const ButtonContext = createContext()

export const SatelliteList = () => {
    const [satellites, setSatellites] = useState([]);
    const { userUID } = useContext(userContext)
    
    // const { userSats, setUserSats } = useContext(userContext);
    // console.log(auth.user.uid)
    // const value = {addSat}

    useEffect(() => {
        fetch('http://localhost:8080/satellites')
            .then(res => res.json())
            .then(data => setSatellites(data))
    }, [])

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

    // const CustomButton = () => {
    //     const [toggle, setToggle] = useState(false)
    //     return (
    //         <button onClick={()=>{setToggle(!toggle)}}> { toggle ? "added" : "add to dashboard" } </button>
    //     )
    // }

    return (
        <div className="container">
            <ul>
                <h2>List of Satellites</h2>
                {satellites.map((sat, index) => {
                    return (
                        <li className="satinfo" key={index}>
                            <Link to={`/satellites/${sat.satelliteID}`} state={{ sat }}> Name: {sat.name} || status: {sat.status} </Link>
                            <ButtonContext.Provider value={addSat}>
                            <ButtonToggle sat={sat} />
                            </ButtonContext.Provider>
                            {/* <button className="add" onClick={() => addSat(sat)}> Add to Dashboard </button> */}
                            <Link to={`/addreport/${sat.satelliteID}`} state={{ sat }}><button className="add"> Submit Report </button></Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}