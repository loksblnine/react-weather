import React, {useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from 'react-leaflet';
import {useAppDispatch} from "../../../hooks";
import './map.css';
import icon from "../../../utils/constants";

function ClickableLayer() {
  const map = useMapEvents({
    dblclick: () => {
      map.locate();
    },
    locationfound: (location) => {
      console.log('location found:', location);
    },
  });
  return null;
}

const MapComponent = () => {
  const [userGeo, setUserGeo] = useState<[number, number]>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      setUserGeo([data.coords.latitude, data.coords.longitude]);
    }, () => {
      setUserGeo([48.45, 34.98]);
    }, {timeout: 1000});
  }, []);

  if (!userGeo) {
    return (
      <div className="m-5">
        Allow geolocation access, please.
      </div>
    );
  }
  return (
    <MapContainer
      center={userGeo}
      zoom={5}
      style={{height: 600, margin: 35}}
      doubleClickZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ClickableLayer/>
      <Marker position={userGeo} icon={icon}>
        <Popup>Here you are ^_^</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;