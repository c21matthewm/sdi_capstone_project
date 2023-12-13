import React, { useState, useContext } from "react";
import { NavBar } from "../NavBar/NavBar";
import { userContext } from "../App";

export const AddSatellite = () => {
  const [name, setName] = useState("");
  const [longitude, setLongitude] = useState(0);
  const [status, setStatus] = useState("");
  const [orbit, setOrbit] = useState("");
  const [mission, setMission] = useState("");
  const [country, setCountry] = useState("");
  const [frequencyBand, setFrequencyBand] = useState("");
  const { loggedInUser } = useContext(userContext)
  const [image, setImage] = useState("");

  const onSatelliteSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/satellites", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        longitude: longitude,
        status: status,
        orbit: orbit,
        mission: mission,
        country: country,
        frequency_band: frequencyBand,
        favorites: loggedInUser.uid,
        image: image,
      }),
    }).then(() => {
      setName("");
      setLongitude(0);
      setStatus("");
      setOrbit("");
      setMission("");
      setCountry("");
      setFrequencyBand("");
      setImage("");
    });
  };

  return (
    <>
      <NavBar />
      <form onSubmit={onSatelliteSubmit}>
        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <hr />

        <label>Longitude:</label>
        <input
          type="number"
          onChange={(e) => setLongitude(e.target.value)}
          value={longitude}
        ></input>
        <hr />

        <label>Status:</label>
        <input
          type="text"
          onChange={(e) => setStatus(e.target.value)}
          value={status}
        ></input>
        <hr />

        <label>Orbit:</label>
        <input
          type="text"
          onChange={(e) => setOrbit(e.target.value)}
          value={orbit}
        ></input>
        <hr />

        <label>Mission:</label>
        <input
          type="text"
          onChange={(e) => setMission(e.target.value)}
          value={mission}
        ></input>
        <hr />

        <label>Country:</label>
        <input
          type="text"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        ></input>
        <hr />

        <label>Frequency Band:</label>
        <input
          type="text"
          onChange={(e) => setFrequencyBand(e.target.value)}
          value={frequencyBand}
        ></input>
        <hr />

        <label>Image:</label>
        <input
          type="text"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        ></input>
        <hr />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};