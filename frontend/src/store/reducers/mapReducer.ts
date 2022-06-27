import {ACTIONS} from "../../utils/constants";

type initialState = {
  isReady: boolean,
  cities: any[],
  userPosition: [number, number],
}

const initialState: initialState = {
  isReady: false,
  cities: [],
  userPosition: [0, 0],
};

const mapReducer = (state = initialState, action: { type: string; payload: any; }) => {
  switch (action.type) {
    case ACTIONS.MAP.SET_USER_DEFAULT_POSITION: {
      return {
        ...state,
        isReady: true,
        userPosition: action.payload
      };
    }
    case ACTIONS.MAP.ADD_CITY_TO_ARRAY: {
      return {
        ...state,
        cities: state.cities.push(action.payload)
      }
    }
    default:
      return state;
  }
};

export default mapReducer;
