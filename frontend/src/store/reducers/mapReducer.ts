import {ACTIONS} from "../../utils/constants";

type initialState = {
  isReady: boolean,
  items: any[],
  page: number,
  loadNext: boolean
}

const initialState: initialState = {
  isReady: false,
  items: [],
  page: 0,
  loadNext: true,
};

const mapReducer = (state = initialState, action: { type: string; payload: any; }) => {
  switch (action.type) {
    case ACTIONS.POSTS.SET_POSTS: {
      if (action.payload.length < 10) {
        return {
          ...state,
          items: state.items.concat(action.payload),
          isReady: true,
          loadNext: false
        };
      }
      return {
        ...state,
        items: state.items.concat(action.payload),
        isReady: true,
        page: state.page + 1
      };
    }
    case ACTIONS.POSTS.UPDATE_POST: {
      const array = state.items.map((item: any) => {
        if (item.id == action.payload.id) {
          return action.payload;
        }
        return item;
      });
      return {
        ...state,
        items: array,
      };
    }
    case ACTIONS.POSTS.SET_READY_POSTS: {
      return {
        ...state,
        isReady: action.payload
      };
    }
    case ACTIONS.POSTS.ADD_POST: {
      return {
        ...state,
        items: state.items.concat(action.payload),
      };
    }
    case ACTIONS.POSTS.DELETE_POST: {
      return {
        ...state,
        items: state.items.filter((item: any) => item.id !== action.payload),
      };
    }
    case ACTIONS.POSTS.SET_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    default:
      return state;
  }
};

export default mapReducer;
