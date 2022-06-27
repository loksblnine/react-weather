import Map from "../components/content/guest/Map";

export const ACTIONS = {
  POSTS: {
    SET_POSTS: "POSTS.SET_POSTS",
    SET_PAGE: "POSTS.SET_PAGE",
    SET_READY_POSTS: "POSTS.SET_READY_POSTS",
    DELETE_POST: "POSTS.DELETE_POST",
    UPDATE_POST: "POSTS.UPDATE_POST",
    ADD_POST: "POSTS.ADD_POST",
  }
};

export const guestRoutes = [
  {
    path: '/map',
    Component: <Map/>
  }
];
