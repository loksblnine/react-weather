import {ACTIONS} from "../../utils/constants";
import {apiPost} from "../../http/httpPlaceholder";

type Post = {
  id: number,
  creator: string,
  link: string,
  title: string,
  isoDate: string,
  content: string,
  content_snippet: string
}

export const setUserStartPosition = () => {
  return async (dispatch: any) => {
    const position = localStorage.getItem('position');
    if (position) {
      dispatch({
        type: ACTIONS.MAP.SET_USER_DEFAULT_POSITION,
        payload: position
      });
    }
  };
};

export const setUserPosition = (lan: number, lng: number) => {
  return async (dispatch: any) => {
    dispatch({
      type: ACTIONS.MAP.SET_USER_DEFAULT_POSITION,
      payload: [lan, lng]
    });
  };
};

export const getWeatherByCoord = (lan: number, lng: number) => {
  console.log(lan, lng);
  return async (dispatch: any) => {
    const {data} = await apiPost({
      data: {
        lan,
        lng
      },
      url: '/get-weather'
    });
    dispatch({
      type: ACTIONS.MAP.ADD_CITY_TO_ARRAY,
      payload: data
    });
  };
};