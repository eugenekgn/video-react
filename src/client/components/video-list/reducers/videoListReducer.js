import * as types from '../../../actions/actionTypes';
import initialState from './initialState';

const videoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_VIDEO_CATEGORY:
      return {
        videos: action.data.items,
        nextPageToken: action.data.nextPageToken,
      };
    case types.LOAD_VIDEOS:
      return {
        videos: state.videos.concat(action.data.items),
        nextPageToken: action.data.nextPageToken,
      };
    default:
      return state;
  }
};

export default videoListReducer;

