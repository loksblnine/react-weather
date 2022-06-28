import React, {useEffect} from 'react';
import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from 'react-leaflet';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import './map.css';
import icon, {ACTIONS, COLLAPSE_ARROWS, EXPAND_ARROWS, imagesByWeatherType} from "../../../utils/constants";
import {getWeatherByCoord} from "../../../store/actions/mapActions";

const ClickableLayer = () => {
  const dispatch = useAppDispatch();
  const map = useMapEvents({
    popupopen: (event) => {
      dispatch({
        type: ACTIONS.MAP.CHOOSE_CITY,
        payload: {
          lat: event.popup.getLatLng()?.lat,
          lng: event.popup.getLatLng()?.lng
        }
      });
    },
    popupclose: (event) => {
      dispatch({
        type: "MAP.SET_OPEN_PANEL",
        payload: false
      });
    },
    dblclick: (e: { latlng: { lat: number; lng: number; }; }) => {
      dispatch(getWeatherByCoord(e.latlng.lat, e.latlng.lng));
      map.locate();
    }
  });
  return null;
};

const MapComponent = () => {
  const dispatch = useAppDispatch();
  const cities = useAppSelector(state => state.map.cities);
  const userGeo: [number, number] = useAppSelector((state) => state.map["userPosition"]);
  const chosenCity = useAppSelector((state) => state.map.chosenCity);
  const openWeatherPanel = useAppSelector((state) => state.map.openPanel);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      dispatch(getWeatherByCoord(data.coords.latitude, data.coords.longitude));
    }, () => {
      dispatch(getWeatherByCoord(48.45, 34.98));
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
    <React.Fragment>
      <button className="btn m-5" type="button" data-toggle="collapse"
              disabled={chosenCity.name === undefined}
              data-target="#Filter" onClick={(e) => {
        e.preventDefault();
        dispatch({
          type: "MAP.SET_OPEN_PANEL",
          payload: !openWeatherPanel
        });
      }}
              aria-controls="Filter">Weather Panel &nbsp;
        {!openWeatherPanel ? EXPAND_ARROWS : COLLAPSE_ARROWS}
      </button>
      {openWeatherPanel && (
        <div id="Panel">
          <div className="row m-lg-4">
            <div className="col-md">
              <h2>{chosenCity.name}</h2>
              <img
                src={imagesByWeatherType.filter((types) => types.type.toLowerCase() === chosenCity.weather[0].description.toLowerCase())[0]?.url}/>
            </div>
            <div className="col-md mt-4 p-2">
              <h4>Temperature</h4>
              <img src="https://res.cloudinary.com/loksblnine/image/upload/v1656420742/samples/gradusnik_krlyuw.png"
                   style={{height: 150, float: "left"}}/>
              <div style={{fontSize: 17, marginTop: 18}}>
                <p className="mt-3">{chosenCity.main.temp} °C</p>
                <p><b>Feels like:</b> {chosenCity.main.feels_like} °C</p>
              </div>
            </div>

            <div className="col-md mt-4 p-2">
              <h4>Humidity</h4>
              <div className="col-sm-2" style={{fontSize: 17}}>
                <p className="mt-3">{chosenCity.main.humidity}%</p>
              </div>
            </div>

            <div className="col-md mt-4 p-2">
              <h4>Pressure</h4>
              <div className="col-sm-2" style={{fontSize: 17}}>
                <p className="mt-3 row">{chosenCity.main.pressure}&nbsp;mbar</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <MapContainer
        center={[48.45, 34.98]}
        zoom={5}
        style={{height: 600, margin: 35}}
        doubleClickZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ClickableLayer/>
        {
          cities?.map((city) => {
            return (
              <Marker position={[city.coord.lat, city.coord.lon]} icon={icon} key={`city-marker-${city.name}`}>
                <Popup>{city.name}</Popup>
              </Marker>
            );
          })
        }

      </MapContainer>
    </React.Fragment>
  );
};

export default MapComponent;