import { LOAD_VIDEOS } from './actionTypes';
import youTubeApi from '../api/youtube';

const loadVideosSuccess = (data) => {
  console.log('load videos');
  return {
    type: LOAD_VIDEOS,
    data: data
  };
};

export const getVideoCategories = () => {
  return youTubeApi.getVideoCategories();
};

export const setVideoCategory = () => {
  return (dispatch) => {
    return loadVideos().then(videos => {
      dispatch(loadVideosSuccess(videos));
    }).catch(error => {
      throw (error);
    });
  };
};

export const loadVideos = (take = 10, pageToken) => {
  return (dispatch) => {
    return youTubeApi.getVideos(take, pageToken)
      .then(response => {
        dispatch(loadVideosSuccess(response));
      }).catch(error => {
        throw (error);
      });
  };
};



