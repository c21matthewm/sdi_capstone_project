import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

export const Map = () => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [circle, setCircle] = useState(null);

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
    <MapContainer
      className="leaflet-container"
      center={[38.8257, -104.6996]}
      attributionControl={true}
      zoom={15}
      minZoom={3}
      scrollWheelZoom={true}
      whenCreated={setMap}
    >
      <TileLayer
        className="ion-hide"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {marker && <Marker position={marker.getLatLng()} />}
      {circle && <Circle center={circle.getLatLng()} radius={circle.options.radius} />}
    </MapContainer>
  );
};
