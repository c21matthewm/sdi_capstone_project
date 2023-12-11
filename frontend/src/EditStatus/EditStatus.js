import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

export const EditStatus = ({ satellite }) => {
    // const { selectedSat } = useLocation().state;

    return (
        <div>
            <h2>Edit Status</h2>
            <p>{satellite.name}</p>
            <Button variant="contained" color="success">Active</Button>
            <Button variant="contained" color="error">Inactive</Button>
        </div>
    )
}