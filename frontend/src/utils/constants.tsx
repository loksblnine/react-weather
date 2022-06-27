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
    ADD_CITY_TO_ARRAY: "MAP.ADD_CITY_TO_ARRAY"
  }
};

export const guestRoutes = [
  {
    path: '/map',
    Component: <Map/>
  }
];
