import {ACTIONS} from "../../utils/constants";

type initialState = {
  isReady: boolean,
  cities: any[],
  userPosition: [number, number],
  chosenCity: any,
  openPanel: boolean
}

const initialState: initialState = {
  isReady: false,
  cities: [],
  userPosition: [0, 0],
  chosenCity: {},
  openPanel: false
};

const mapReducer = (state = initialState, action: { type: string; payload: any; }) => {
  switch (action.type) {
    case ACTIONS.MAP.SET_USER_DEFAULT_POSITION: {
      return {
        ...state,
        isReady: true,
        userPosition: action.payload,
      };
    }
    case ACTIONS.MAP.ADD_CITY_TO_ARRAY: {
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
    case ACTIONS.MAP.CHOOSE_CITY: {
      return {
        ...state,
        chosenCity: state.cities.filter((city) => {
          return city.coord.lat === action.payload.lat && city.coord.lon === action.payload.lng;
        })[0],
        openPanel: true
      };
    }
    case ACTIONS.MAP.SET_OPEN_PANEL: {
      return {
        ...state,
        openPanel: action.payload
      };
    }
    default:
      return state;
  }
};

export default mapReducer;
