import {combineReducers} from 'redux';
import videoList from './components/video-list/reducers/videoListReducer';

const rootReducer = combineReducers({
  videoList
});

export default rootReducer;