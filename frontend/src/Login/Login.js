import React, { useState } from "react"
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => { console.log(userCredentials) })    // returns a promise, resolves to userCredentials
      .catch((error) => { console.log(error) })
  }

  return (
    <>
      <form onSubmit={signIn}>
        <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter email..."></input>
        <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter password..."></input>
        <button type="submit">Login</button>
      </form>
    </>
  )
}