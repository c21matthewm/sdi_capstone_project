import React, { useState, useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Login } from "./Login";
import { Dashboard } from '../Dashboard/Dashboard';
import { auth } from "../firebase";
import { userContext } from "../App";
import { AdminDashboard } from "../Dashboard/AdminDashboard";

export const AuthDetails = () => {
  const { authUser, setAuthUser, setUserUID, admin, setAdmin } = useContext(userContext);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setUserUID(user.uid);
        fetch(`http://localhost:8080/users/${user.uid}`)
        .then((res) => res.json())
        .then(data => {
          setAdmin(data[0].admin);
        })
      } else {
        setAuthUser(null)
      }
    });

    return () => {
      listen();
    }
  }, []);

  return (
    <div> {authUser ?
      <> { admin ?
      <AdminDashboard /> : <Dashboard />
          }
      </>
      :
        <Login />
    }
    </div>
  )
}
