import React, { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';
// import { Link } from 'react-router-dom';
import "../Satellite/Satellite.css";
// import { ButtonContext } from './SatelliteList';

export const ButtonToggle = ({sat}) => {
  const { loggedInUser,
        // userSats, setUserSats 
    } = useContext(userContext)
  // const { addSat } = useContext(ButtonContext)
  const [toggle, setToggle] = useState(sat.favorites.includes(loggedInUser.uid) ? true : false);
  const [updatedFavorites, setUpdatedFavorites] = useState([])

    useEffect(() => {
        console.log(sat)
        console.log('sat.favorites: ', sat.favorites)
        console.log('updatedFavorites: ', updatedFavorites)
        console.log(loggedInUser.uid)

        // const buttonText = sat.favorites.includes(loggedInUser.uid) ? "Added" : "Add to Dashboard"

        updatedFavorites.length > 0 &&

            fetch(`http://localhost:8080/satellites/favorites/${sat.satelliteID}`,
            {
                method: "PATCH",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "favorites":  updatedFavorites
                })
            })

    }, [updatedFavorites])



  const addSat = (sat) => {

    sat.favorites.includes(loggedInUser.uid) ? console.log('already added') 
    : setUpdatedFavorites([...sat.favorites, loggedInUser.uid])
    
    console.log(`${sat.name}: ${updatedFavorites}`)

//     fetch(`http://localhost:8080/satellites/favorites/${sat.satelliteID}`,
//         {
//             method: "PATCH",
//             mode: "cors",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 "favorites":  updatedFavorites
//             })
//         })
    }

  return(
    <button className="add" onClick={()=>{ setToggle(!toggle); addSat(sat) }}>{
          toggle ? "Added" : "Add to Dashboard"
         }</button>
  ) 
}