import {combineReducers} from 'redux';

import map from './mapReducer';

const appReducer = combineReducers({
  map
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
