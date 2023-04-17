import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../node_modules/leaflet/dist/leaflet.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MapContainer 
      center={[38.1102, 13.3752]} 
      zoom={14} 
      scrollWheelZoom={false} 
      style={{
        height: "200px",
        }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[38.151, 13.357]}>
          <Popup>
            I'm a book!
          </Popup>

        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
