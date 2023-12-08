import React, { useState } from "react"
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [unit, setUnit] = useState('');

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        fetch('http://localhost:8080/users',
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              "email": email,
              "unit": unit,
              "uid": userCredentials.user.uid,
              "admin": false
            }),
          })
      })
  }

  return (
    <>
      <form onSubmit={signUp}>
        <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter email..."></input>
        <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter password..."></input>
        <input type='text' onChange={(e) => setUnit(e.target.value)} value={unit} placeholder="Enter unit..."></input>
        <button type="submit">Sign Up</button>
      </form>
    </>
  )
}