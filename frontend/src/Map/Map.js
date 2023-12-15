import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Circle, Popup } from "react-leaflet";
import Button from '@mui/material/Button';
import { NavBar } from "../NavBar/NavBar";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { userContext } from "../App";
import "./Map.css";

export const Map = () => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState();
  const [circle, setCircle] = useState();
  // const [cursorInfo, setCursorInfo] = useState({ top: 0, left: 0, lat: 0, lng: 0});
  const { reports, satellites } = useContext(userContext);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Your browser doesn't support geolocation feature!");
    } else {
      setInterval(() => {
        navigator.geolocation.getCurrentPosition(getPosition);
      }, 5000);
    }
  }, []);

  useEffect(() => {
    if (map && marker && circle) {
      const featureGroup = L.featureGroup([marker, circle]).addTo(map);
      map.fitBounds(featureGroup.getBounds());
    }
  }, [map, marker, circle]);

  function getPosition(position) {
    const { latitude: lat, longitude: long, accuracy } = position.coords;

    const newMarker = L.marker([lat, long]);
    const newCircle = L.circle([lat, long], { radius: accuracy });

    setMarker(newMarker);
    setCircle(newCircle);
  }


  return (
    <>
      <NavBar />
      <div className="map-title">
        <MapContainer
          className="leaflet-container"
          center={[0, 0]}
          attributionControl={true}
          zoom={3}
          minZoom={2}
          scrollWheelZoom={true}
          whenCreated={setMap}
          // onMouseMove={(e) => {
          //   console.log("Mouse coordinates:", e.latlng.lat, e.latlng.lng);
          //   const { lat, lng } = e.latlng;
          //   const container = map.getContainer();
          //   const bounds = container.getBoundingClientRect();

          //   const left = e.containerPoint.x - bounds.left;
          //   const top = e.containerPoint.y - bounds.top;

          //   setCursorInfo({
          //     top: `${top}px`,
          //     left: `${left}px`,
          //     lat: lat.toFixed(4),
          //     lng: lng.toFixed(4),
          //   });
          //   }}
        >
          <TileLayer
            className="ion-hide"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* {marker && <Marker position={marker.getLatLng()} />} */}
          {/* {circle && <Circle center={circle.getLatLng()} radius={circle.options.radius} />} */}
          {reports.map((report) => {
            const sat = (satellites.find((satellite) => satellite.satelliteID === report.satelliteID));
            return (
            <Marker key={report.reportID} position={[report.latitude, report.longitude]}>
              <Popup>
                <h3>Report: {report.reportID}</h3>
                <Link to={`/reports/${report.reportID}`} state={{ report, sat}}><Button variant="contained" color="primary">View Report</Button></Link>
              </Popup>
            </Marker>
            )
          })}
        </MapContainer>
        {/* <div className="cursor-info" style={{top: 0, left: 0}}>
          <p>Latitude: {cursorInfo.lat}</p>
          <p>Longitude: {cursorInfo.lng}</p>
        </div> */}
      </div>
    </>
  );
};