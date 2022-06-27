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
      console.log(action.payload);
      let wasInArray = false;
      for (let i = 0; i < state.cities.length; i++) {
        if (state.cities[i].name === action.payload.name) {
          wasInArray = true;
          break;
        }
      }
      const array = state.cities.map((city) => {
        if (city.name === action.payload.name) {
          return action.payload;
        }
        return city;
      });
      if (!wasInArray) {
        array.push(action.payload);
      }
      return {
        ...state,
        cities: array
      };
    }
    default:
      return state;
  }
};

export default mapReducer;
