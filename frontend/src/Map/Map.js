import { useEffect, useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Circle, Popup } from "react-leaflet";
import Button from "@mui/material/Button";
import { NavBar } from "../NavBar/NavBar";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { userContext } from "../App";
import { Box } from "@mui/system";
import "./Map.css";


export const Map = () => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState();
  const [circle, setCircle] = useState();
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
  
  
  
  // L.marker([51.5, -0.09], {icon: yellowIcon}).addTo(map);
  
  // L.marker([51.5, -0.09], {icon: redIcon}).addTo(map);
  
  // L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);
  // add marker
  // this.marker = L.marker(this.props.markerPosition, {
  //   icon: redIcon
  // }).addTo(this.map);
  // const [cursorInfo, setCursorInfo] = useState({
  //   top: 0,
  //   left: 0,
  //   lat: 0,
  //   lng: 0,
  // });

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Your browser doesn't support geolocation feature!");
    } else {
      setInterval(() => {
        navigator.geolocation.getCurrentPosition(getPosition);
      }, 5000);
    }

    if (map) {
      map.on('mouseover', function () {
        console.log('your mouse is over the map');
      });

      map.on('mousemove', function (e) {
        document.getElementsByClassName('coordinate')[0].innerHTML = 
        'COORDINATES:<hr></hr><br>' +
        'LATITUDE: <br>' + e.latlng.lat.toFixed(4) + '<br></br>' +
        'LONGITUDE: <br>' + e.latlng.lng.toFixed(4);
        // console.log('lat: ' + e.latlng.lat, 'lng: ' + e.latlng.lng);
      });
    }
  }, [map]);

  // useEffect(() => {
  //   if (map && marker && circle) {
  //     const featureGroup = L.featureGroup([marker, circle]).addTo(map);
  //     map.fitBounds(featureGroup.getBounds());
  //   }
  // }, [map, marker, circle]);

  function getPosition(position) {
    const { latitude: lat, longitude: long, accuracy } = position.coords;

    const newMarker = L.redIcon([lat, long]);
    const newCircle = L.circle([lat, long], { radius: accuracy });

    setMarker(newMarker);
    setCircle(newCircle);
  }
  
  // useEffect(()=> {
  //   reports.map((report) => {
  //     const sat = satellites.find(
  //       (satellite) => satellite.satelliteID === report.satelliteID,
  //     );
  //     return (
  //       <>
  //       {/* {L.marker([report.latitude, report.longitude], {icon: redIcon}).addTo(map)} */}
  //       <Marker
  //         key={report.reportID}
  //         position={[report.latitude, report.longitude]}
  //       >
  //         <Popup>
  //           <h3>{sat.name.toUpperCase()} </h3>
  //           <h3>Report #{report.reportID} </h3>
  //           <Link
  //             to={`/reports/${report.reportID}`}
  //             state={{ report, sat }}
  //           >
  //             <Button variant="contained" color="primary">
  //               View Report
  //             </Button>
  //           </Link>
  //         </Popup>
  //       </Marker>
  //       </>
  //     );
  //   })
  //   return (
  //       <>
  //       </>
  //   )
  // }, [])
  // L.marker([50, 50], {icon: redIcon}).addTo(map)
  // L.marker([40, 40], {icon: yellowIcon}).addTo(map)


  return (
    <>
      <NavBar />   
      {/* <Box className="coord-box" component="section" sx={{ boxShadow: 3, p: 2, border: '1px solid grey' }}>
      <div className="coord-box">
      </div>
      </Box> */}

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
          // onMouseMove={(e) => {
          //   if (map){
          //   const { lat, lng } = e.latlng;
          //   const container = map.getContainer();
          //   const bounds = container.getBoundingClientRect();

          //   const left = e.containerPoint.x - bounds.left;
          //   const top = e.containerPoint.y - bounds.top;

          // setCursorInfo({
          //     top: `${top}px`,
          //     left: `${left}px`,
          //     lat: lat.toFixed(4),
          //     lng: lng.toFixed(4),
          //   });
          // }}}
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


              // let newIcon = {report.status == "GREEN" ? greenIcon : 
              // report.status == "YELLOW" ? yellowIcon :  redIcon}
              return (
                <>
                {/* {L.marker([report.latitude, report.longitude], {icon: redIcon}).addTo(map)} */}
              
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
          {/* </MarkerClusterGroup> */}
          {/* {marker && <Marker position={marker.getLatLng()} />}
          {circle && <Circle center={circle.getLatLng()} radius={circle.options.radius} />} */}
        </MapContainer>
      </div>
    </>
  );
};


// import {  divIcon, point } from "leaflet";
// import MarkerClusterGroup from "react-leaflet-markercluster";

// {/* <MarkerClusterGroup
// chunkedLoading
// iconCreateFunction={createClusterCustomIcon}
// >
// {/* Mapping through the markers */}
// {markers.map((marker) => (

// ))}

//   <Popup>This is popup 1</Popup>
// </Marker>
// <Marker position={[51.504, -0.1]} icon={customIcon}>
//   <Popup>This is popup 2</Popup>
// </Marker>
// <Marker position={[51.5, -0.09]} icon={customIcon}>
//   <Popup>This is popup 3</Popup>
// </Marker>
// */}
// </MarkerClusterGroup>

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


// create custom icon
// const customIcon = new Icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
//   // iconUrl: require("./placeholder.png"),
//   iconSize: [38, 38], // size of the icon
// });

// custom cluster icon
// const createClusterCustomIcon = function (cluster) {
//   return new divIcon({
//     html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
//     className: "custom-marker-cluster",
//     iconSize: point(33, 33, true),
//   });
// };