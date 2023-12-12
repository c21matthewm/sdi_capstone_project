import React from 'react';
import { Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';


export const EditStatus = ({ satellite, onClose }) => {

    const handleButtonClick = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/satellites/status/${satellite.satelliteID}` , 
        {
        method: "PATCH",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "status": e.target.value
        }),
        })
        onClose();
        console.log(e.target.value)
    }

    return (
        <div>
            <h2>Edit Status</h2>
            <p>{satellite.name}</p>
            <Button variant="contained" color="success" value="GREEN" onClick={
                handleButtonClick
                }>Green</Button>
            <Button variant="contained" color='warning' value="YELLOW" onClick={
                handleButtonClick
                }>Yellow</Button>
            <Button variant="contained" color="error" value="RED" onClick={
                handleButtonClick
                }>Red</Button>
        </div>
    )
}