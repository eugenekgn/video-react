import * as types from '../../../actions/actionTypes';
import initialState from './initialState';

const videoListReducer = (state = initialState, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case types.LOAD_VIDEOS:
      return {
        videos: action.data.items,
        nextPageToken: action.data.nextPageToken
      };
    default:
      return state;
  }
};

export default videoListReducer;

