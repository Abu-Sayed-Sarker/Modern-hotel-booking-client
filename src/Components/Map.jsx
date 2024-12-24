
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';





function Map() {
    const position = [51.505, -0.09]

    return (
        <div>
            <h1 className='text-2xl lg:text-5xl font-semibold text-teal-500 text-center pt-10'>Hotels Map</h1>
            <p className='pt-5 pb-10 max-w-3xl mx-auto text-center'>The location of all the international hotels is mentioned here. Those who are confused about the location of the hotel can check the location below.</p>
            <div className='h-[500px] w-10/12 mx-auto rounded-2xl overflow-hidden'>
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
        </div>
    );
}

export default Map;
