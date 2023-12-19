import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton } from '@mui/material';

export const NavBar = () => {

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('sign out succesful')
            })
            .catch((error) => console.log(error))
    }

    return (
        <AppBar sx={{ background: "#4169E1" }} position="static">
            <div className="left-align">
                <Toolbar disableGutters={true} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'space-between' } }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        SatBridge
                    </Typography>
                    <Box sx={{ justifyContent: 'flex-start' }}>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <ListItemButton component={Link} to={`/`} >
                                <ListItemText primary={`DASHBOARD`} />
                            </ListItemButton>

                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <ListItemButton component={Link} to={`/satellites`} >
                                    <ListItemText primary={`SATELLITE LIST`} />
                                </ListItemButton>
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <ListItemButton component={Link} to={`/reports`} >
                                    <ListItemText primary={`REPORTS`} />
                                </ListItemButton>
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <ListItemButton component={Link} to={`/addreport`} >
                                    <ListItemText primary={`SUBMIT REPORT`} />
                                </ListItemButton>
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <ListItemButton component={Link} to={`/map`} >
                                    <ListItemText primary={`MAP`} />
                                </ListItemButton>
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <ListItemButton component={Link} to={`/`} onClick={userSignOut} >
                                    <ListItemText primary={`SIGN OUT`} />
                                </ListItemButton>
                            </Box>

                        </Box>
                    </Box>
                </Toolbar>
            </div>
        </AppBar>
    );
};