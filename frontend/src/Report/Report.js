import React from "react";
import { useLocation } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";

export const Report = () => {
  const location = useLocation();
  const { report } = location.state;

  return (
    <>
  <NavBar/>
    <div className="container">
      <ul>
      <h2>REPORT #{report.reportID}</h2>
        <li> {report.time} </li>
        <li> {report.latitude} </li>
        <li> {report.longitude} </li>
        <li> {report.frequency_band} </li>
        <li> {report.mission} </li>
        <li> {report.status} </li>
        <li> {report.reason} </li>
      </ul>
    </div>
    </>
  )
}