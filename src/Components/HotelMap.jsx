
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { Map, Marker } from "pigeon-maps"





const HotelMap = () => {
    return (
        <div>
            <div>
                <h1 className='text-2xl lg:text-5xl font-semibold text-teal-500 text-center pt-10'>Hotels Map</h1>
                <p className='pt-5 pb-10 max-w-3xl mx-auto text-center'>The location of all the international hotels is mentioned here. Those who are confused about the location of the hotel can check the location below.</p>
                <div className='h-[500px] w-10/12 mx-auto rounded-2xl overflow-hidden'>
                    <Map height={700} defaultCenter={[23.461100307408298, 91.18216787831416]} defaultZoom={11}>
                        <Marker width={50} anchor={[23.461100307408298, 91.18216787831416]} />
                    </Map>
                </div>
            </div>
        </div>
    );
};

export default HotelMap;