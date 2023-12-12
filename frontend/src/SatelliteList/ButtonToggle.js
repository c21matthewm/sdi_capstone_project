import React, { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';
import "../Satellite/Satellite.css";
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export const ButtonToggle = ({sat}) => {
  const { loggedInUser } = useContext(userContext)
  const [toggle, setToggle] = useState(sat.favorites.includes(loggedInUser.uid) ? true : false);
  const [updatedFavorites, setUpdatedFavorites] = useState([])

    useEffect(() => {
        console.log(sat)
        console.log('sat.favorites: ', sat.favorites)
        console.log('updatedFavorites: ', updatedFavorites)
        console.log(loggedInUser.uid)

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

    if (sat.favorites.includes(loggedInUser.uid)) {
      const newFavorites = sat.favorites.filter((uid) => uid !== loggedInUser.uid);
      setUpdatedFavorites(newFavorites);
    } else {
      setUpdatedFavorites([...sat.favorites, loggedInUser.uid])
    }
    setToggle(!toggle);
    
    // console.log('already added') 
    // : setUpdatedFavorites([...sat.favorites, loggedInUser.uid])
    
    // console.log(`${sat.name}: ${updatedFavorites}`)
    }

  return(
    <Button 
      variant="contained" 
      color={toggle ? "error" : "success"} 
      startIcon={toggle ? <DeleteIcon /> : <AddIcon />} 
      className="add" 
      onClick={()=>{ addSat(sat) }}>
      {toggle ? "Remove from Dashboard" : "Add to Dashboard"}
    </Button >
  ) 
}