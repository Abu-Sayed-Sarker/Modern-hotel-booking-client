
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';





function Map() {
    const position = [51.505, -0.09]

    return (
        <div className='h-[500px]'>
            <MapContainer center={position} zoom={13} style={{ width: "100%", height: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>
                        A simple popup.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map;
