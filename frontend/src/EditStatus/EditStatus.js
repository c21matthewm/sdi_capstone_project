import React from 'react';
import { Button } from '@mui/material';

export const EditStatus = () => {
    return (
        <div>
            <h2>Edit Status</h2>
            <Button variant="contained" color="success">Active</Button>
            <Button variant="contained" color="error">Inactive</Button>
        </div>
    )
}