import React, { useState, useEffect, useContext } from "react";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { Login } from "./Login/Login";
import { SignUp } from "./SignUp/SignUp";
import { Dashboard } from './Dashboard/Dashboard';
// import { UserInventory } from "../UserInventory";
// import { AuthHeader } from "./AuthHeader";
// import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { userContext } from "./App";
// import '../../CSS/AuthDetails.css';
import { NavBar } from "./NavBar/NavBar";

export const AuthDetails = () => {
  const { authUser, setAuthUser } = useContext(userContext);
  const { userUID, setUserUID } = useContext(userContext)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setUserUID(user.uid);
        console.log(userUID)
      } else {
        setAuthUser(null)
      }
    });

    return () => {
      listen();
    }
  }, []);

  const userSignOut = () => {
    signOut(auth)
    .then(() => {
    console.log('sign out succesful')
    })
    .catch((error)=>console.log(error))
  }


  return (
  <div> {authUser ?
  <>
    <Dashboard />
  </>
  : 
  <>
  <Login />
  </>
  }
  </div>
    )
}


// accounts PW: password
// admin@gmail.com, user, user2, user3 @ gmail.com