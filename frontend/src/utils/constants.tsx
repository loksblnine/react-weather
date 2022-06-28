import Map from "../components/content/guest/Map";
import L from "leaflet";


export default L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

export const ACTIONS = {
  MAP: {
    SET_USER_DEFAULT_POSITION: "MAP.SET_USER_DEFAULT_POSITION",
    ADD_CITY_TO_ARRAY: "MAP.ADD_CITY_TO_ARRAY",
    CHOOSE_CITY: "MAP.CHOOSE_CITY",
    SET_OPEN_PANEL: "MAP.SET_OPEN_PANEL"
  }
};

export const guestRoutes = [
  {
    path: '/map',
    Component: <Map/>
  }
];

export const COLLAPSE_ARROWS =
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
       className="bi bi-arrows-collapse" viewBox="0 0 16 16">
    <path fillRule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z"/>
  </svg>;
export const EXPAND_ARROWS =
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
       className="bi bi-arrows-expand" viewBox="0 0 16 16">
    <path fillRule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10z"/>
  </svg>;

export const imagesByWeatherType = [
  {
    type: "clear sky",
    url: "https://res.cloudinary.com/loksblnine/image/upload/v1656418798/samples/clear_sky_wvnljp.png"
  },
  {
    type: "few clouds",
    url: "https://res.cloudinary.com/loksblnine/image/upload/v1656418798/samples/few_clouds_hfv0ga.png"
  },
  {
    type: "scattered clouds",
    url: "https://res.cloudinary.com/loksblnine/image/upload/v1656418798/samples/scattered_clouds_egzu3a.png"
  },
  {
    type: "broken clouds",
    url: "https://res.cloudinary.com/loksblnine/image/upload/v1656418798/samples/broken_clouds_f43fcc.png"
  },
  {
    type: "overcast clouds",
    url: "https://res.cloudinary.com/loksblnine/image/upload/v1656418798/samples/broken_clouds_f43fcc.png"
  },
  {
    type: "shower rain",
    url: "https://res.cloudinary.com/loksblnine/image/upload/v1656418798/samples/shower_rain_z8wu3s.png"
  },
  {
    type: "rain",
    url: "https://res.cloudinary.com/loksblnine/image/upload/v1656418798/samples/rain_q9c40l.png"
  },
  {
    type: "thunderstorm",
    url: "https://res.cloudinary.com/loksblnine/image/upload/v1656418798/samples/thunderstorm_gdvb5k.png"
  },
  {
    type: "snow",
    url: "https://res.cloudinary.com/loksblnine/image/upload/v1656418798/samples/snow_auecp4.png"
  },
  {
    type: "mist",
    url: "https://res.cloudinary.com/loksblnine/image/upload/v1656418798/samples/mist_kctwpr.png"
  }
];