
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyCH2J0nMQd9nw25jcEf-prgP8Vy0DMAVoM",
  authDomain: "capstone-65c67.firebaseapp.com",
  projectId: "capstone-65c67",
  storageBucket: "capstone-65c67.appspot.com",
  messagingSenderId: "178573885101",
  appId: "1:178573885101:web:c5769a6cb9a418ccafd024"

};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);