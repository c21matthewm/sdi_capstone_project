import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./styles.css";

export const Map = () => {
	const position = [38.8257, -104.6996];
//   const markers = [
// {
//     geocode: [39.7025, -104.76],
//     popup: "Buckley Space Force "
// },
// {
//   geocode: [39.7025, -104.76],
//   popup: "Buckley Space Force "
// },
// {
//   geocode: [39.7025, -104.76],
//   popup: "Buckley Space Force "
// }
// ]

	return (
		<MapContainer
      className="leaflet-container"
      center={position}
      attributionControl={true}
      zoom={15}
      minZoom={3}
      scrollWheelZoom={true}>
        {/* <ComponentResize /> */}
          <TileLayer
            className={'ion-hide'}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
    </MapContainer>


	);
};

export default Map;






