import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Button from "@mui/material/Button";
import { NavBar } from "../NavBar/NavBar";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { userContext } from "../App";
import "./Map.css";

export const Map = () => {
  const [map, setMap] = useState(null);
  const { reports, satellites } = useContext(userContext);

  var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  var yellowIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  useEffect(() => {
    if (map) {

      map.on('mousemove', function (e) {
        document.getElementsByClassName('coordinate')[0].innerHTML = 
        'COORDINATES:<hr></hr><br>' +
        'LATITUDE: <br>' + e.latlng.lat.toFixed(4) + '<br></br>' +
        'LONGITUDE: <br>' + e.latlng.lng.toFixed(4);
      });
    }
  }, [map]);

  return (
    <>
      <NavBar />   
      <div className="coordinate"></div>
      <div className="legend">
      <p className="l-title">LEGEND:</p>
      <hr></hr>
      <div className="marks">
        <img width={15}  height={24} src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png" alt="green"></img>
        <p>Connection is good</p>
      </div> 
      <div className="marks">
        <img width={15}  height={24}src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png" alt="yellow"></img>
        <p>Connection is degraded</p>
      </div>
      <div className="marks">  
        <img width={15} height={24} src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png" alt="red"></img>
        <p>Cannot connect</p>
      </div>
      </div>
      <div className="map-title">
        <MapContainer
          className="leaflet-container"
          center={[0, 0]}
          attributionControl={true}
          zoom={3}
          minZoom={2}
          scrollWheelZoom={true}
          ref={setMap}
        >
          <TileLayer
            className="ion-hide"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            noWrap={false}
            
          />
          
            {reports.map((report) => {
              const sat = satellites.find(
                (satellite) => satellite.satelliteID === report.satelliteID,
              );
              let newIcon;
                if (report.status === "GREEN" )
                newIcon = greenIcon
                else if(report.status === "YELLOW")
                newIcon = yellowIcon
                else if(report.status === "RED")
                newIcon = redIcon
                else 
                newIcon = greenIcon

              return (
                <>
                <Marker
                  key={report.reportID}
                  position={[report.latitude, report.longitude]}
                  icon={newIcon}
                >
                  <Popup>
                    <h3>{sat.name.toUpperCase()} </h3>
                    <h3>Report #{report.reportID} </h3>
                    <Link
                      to={`/reports/${report.reportID}`}
                      state={{ report, sat }}
                    >
                      <Button variant="contained" color="primary">
                        View Report
                      </Button>
                    </Link>
                  </Popup>
                </Marker>
                </>
              );
            })}
        </MapContainer>
      </div>
    </>
  );
};
