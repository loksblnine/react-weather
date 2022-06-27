import React, {useEffect} from 'react';
import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from 'react-leaflet';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import './map.css';
import icon from "../../../utils/constants";
import {getWeatherByCoord, setUserPosition} from "../../../store/actions/mapActions";

function ClickableLayer() {
  const dispatch = useAppDispatch();
  const map = useMapEvents({
    dblclick: (e: { latlng: { lat: number; lng: number; }; }) => {
      dispatch(getWeatherByCoord(e.latlng.lat, e.latlng.lng));
      map.locate();
    }
  });
  return null;
}

const MapComponent = () => {
  const dispatch = useAppDispatch();
  const userGeo: [number, number] = useAppSelector((state) => state.map["userPosition"]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      dispatch(setUserPosition(data.coords.latitude, data.coords.longitude));
    }, () => {
      dispatch(setUserPosition(48.45, 34.98));
    }, {timeout: 1000});
  }, []);

  if (!userGeo) {
    return (
      <div className="m-5">
        Allow geolocation access, please.
      </div>
    );
  }
  console.log(11111, userGeo);
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