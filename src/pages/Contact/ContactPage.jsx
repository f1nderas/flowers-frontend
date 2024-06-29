import "./ContactPages.scss";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin, Flower2, User, ArrowLeft } from "lucide-react";
import ReactDOMServer from "react-dom/server";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const center = [56.870848, 35.924131];

const initialAddresses = [
  { id: 1, name: "Ул. Красина 46", coords: [56.87773, 35.907423] },
  { id: 2, name: "Ул. Хрустальная 12", coords: [56.889164, 35.904027] },
  { id: 3, name: "Ул. Маяковского 31", coords: [56.86215, 35.943607] },
  {
    id: 4,
    name: "Ул. Академика Туполева 113а",
    coords: [56.863291, 35.961896],
  },
  { id: 6, name: "Ул. Горького 124а", coords: [56.869122, 35.891819] },
];

const createIcon = (IconComponent, color) => {
  return L.divIcon({
    html: ReactDOMServer.renderToString(
      <div
        style={{
          width: "max-content",
          backgroundColor: "white",
          borderRadius: "18px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          paddingRight: "4px",
          border: "2px solid green",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            backgroundColor: "green",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "3px",
          }}
        >
          <IconComponent color={color} size={24} />
        </div>
        <span style={{ fontSize: "12px" }}>Вальс Цветов</span>
      </div>
    ),
    className: "custom-icon",
  });
};

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const FlyToLocation = ({ coords }) => {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.flyTo(coords, 16, { animate: true, duration: 2 });
    }
  }, [coords, map]);
  return null;
};

const ContactPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const [addresses, setAddresses] = useState(initialAddresses);
  const [userLocation, setUserLocation] = useState(null);
  const [selectedCoords, setSelectedCoords] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      });
    }
  }, []);

  const handleAddressClick = (coords) => {
    setSelectedCoords(coords);
  };

  return (
    <>
      <div className="section">
        <div className="container">
          <button onClick={goBack} className="goBack">
            <ArrowLeft />
          </button>
          <div className="app">
            <div className="map-container">
              <MapContainer
                center={center}
                zoom={13}
                style={{ height: "500px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {addresses.map(
                  (address) =>
                    address.coords && (
                      <Marker
                        key={address.id}
                        position={address.coords}
                        icon={createIcon(Flower2, "white")}
                      >
                        <Popup>{address.name}</Popup>
                      </Marker>
                    )
                )}
                {userLocation && (
                  <Marker
                    position={userLocation}
                    icon={createIcon(User, "white")}
                  >
                    <Popup>Вы здесь</Popup>
                  </Marker>
                )}
                {selectedCoords && (
                  <Marker
                    position={selectedCoords}
                    icon={createIcon(Flower2, "white")}
                  >
                    <Popup>Фокус на выбранный адрес</Popup>
                  </Marker>
                )}
                {selectedCoords && <FlyToLocation coords={selectedCoords} />}
              </MapContainer>
            </div>
            <div className="address-list">
              <h2>Список адресов</h2>
              <ul>
                {addresses.map((address) => (
                  <li
                    key={address.id}
                    onClick={() => handleAddressClick(address.coords)}
                    className="feature-card"
                  >
                    {address.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { ContactPage };
