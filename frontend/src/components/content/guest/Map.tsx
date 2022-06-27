import React, {useEffect} from 'react';
import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from 'react-leaflet';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import './map.css';
import icon from "../../../utils/constants";
import {getWeatherByCoord, setUserPosition} from "../../../store/actions/mapActions";
import {Simulate} from "react-dom/test-utils";


function ClickableLayer() {
  console.log(process.env);
  const dispatch = useAppDispatch();
  const map = useMapEvents({
    dblclick: () => {
      map.locate();
    },
    locationfound: (location) => {
      dispatch(getWeatherByCoord(location.latlng.lat, location.latlng.lng));
      console.log('location found:', location);
    },
  });
  return null;
}

const MapComponent = () => {
  const dispatch = useAppDispatch();

  //store it in redux and localstorage
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
  return (
    <MapContainer
      center={userGeo}
      zoom={5}
      style={{height: 600}}
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