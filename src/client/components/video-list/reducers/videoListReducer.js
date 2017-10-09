import * as types from '../../../actions/actionTypes';
import initialState from './initialState';

const videoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_VIDEOS:
      return {
        videos: action.videos
      };
    default:
      return state;
  }
};

export default videoListReducer;

