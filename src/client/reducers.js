import {combineReducers} from 'redux';

const filler = (state = [], action) => {
  return state;
};

// es6 shorthand property name, throw away course
const rootReducer = combineReducers({
  filler
});

export default rootReducer;