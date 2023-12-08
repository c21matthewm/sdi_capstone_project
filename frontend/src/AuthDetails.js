import React, { useState, useEffect } from "react";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { Login } from "./Login/Login";
import { SignUp } from "./SignUp/SignUp";
import { Dashboard } from './Dashboard/Dashboard';
// import { UserInventory } from "../UserInventory";
// import { AuthHeader } from "./AuthHeader";
// import { Link } from "react-router-dom";
import { auth } from "./firebase";
// import '../../CSS/AuthDetails.css';

export const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
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
  <h2>hello</h2>
    <p> {`Signed In as ${authUser.email}`}</p>
    <button onClick={userSignOut}> Sign Out </button>
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