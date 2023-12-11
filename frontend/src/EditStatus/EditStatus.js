import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

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
            <Button variant="contained" color="success" value="active" onClick={
                handleButtonClick
                }>Active</Button>
            <Button variant="contained" color="error" value="inactive" onClick={
                handleButtonClick
                }>Inactive</Button>
        </div>
    )
}