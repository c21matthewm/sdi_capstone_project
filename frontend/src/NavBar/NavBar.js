import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';
import { AuthDetails } from "../AuthDetails";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
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
                <Toolbar disableGutters="true" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent: 'space-between' } }}>
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
                        SATSTAT
                    </Typography>
                    <Box sx={{ justifyContent: 'flex-start' }}>
                        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex'}, mr: 1 }} /> */}



                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <ListItemButton component={Link} to={`/dashboard`} >
                                <ListItemText primary={`DASHBOARD`} />
                            </ListItemButton>

                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <ListItemButton component={Link} to={`/satellites`} >
                                    <ListItemText primary={`SATELLITE LIST`} />
                                </ListItemButton>
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <ListItemButton component={Link} to={`/reports`} >
                                    <ListItemText primary={`REPORT LIST`} />
                                </ListItemButton>
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <ListItemButton component={Link} to={`/addreport`} >
                                    <ListItemText primary={`SUBMIT REPORT`} />
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