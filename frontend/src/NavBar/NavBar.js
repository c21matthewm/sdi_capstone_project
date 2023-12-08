import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
    return (
        <div className="navBar">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/satellites">Satellites</Link>
        </div>
    )
};