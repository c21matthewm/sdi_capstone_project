import React, { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';
import "../Satellite/Satellite.css";
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export const ButtonToggle = ({sat}) => {
  const { userUID } = useContext(userContext)
  const [toggle, setToggle] = useState(sat.favorites.includes(userUID) ? true : false);
  const [updatedFavorites, setUpdatedFavorites] = useState([])

    useEffect(() => {
        console.log(sat)
        console.log('sat.favorites: ', sat.favorites)
        console.log('updatedFavorites: ', updatedFavorites)
        console.log(userUID)

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

    if (sat.favorites.includes(userUID)) {
      const newFavorites = sat.favorites.filter((uid) => uid !== userUID);
      setUpdatedFavorites(newFavorites);
    } else {
      setUpdatedFavorites([...sat.favorites, userUID])
    }
    setToggle(!toggle);
  
    }

  return(
    <Button 
      variant="contained" 
      color={toggle ? "error" : "success"} 
      startIcon={toggle ? <DeleteIcon /> : <AddIcon/>} 
      className="add" 
      onClick={()=>{ addSat(sat) }}>
      {toggle ? "Dashboard" :  "Dashboard" }
    </Button >
  ) 
}