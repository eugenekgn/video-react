import {LOAD_VIDEOS, CHANGE_VIDEO_CATEGORY} from './actionTypes';
import youTubeApi from '../api/youtube';

const loadVideosSuccess = (data) => {
  return {
    type: LOAD_VIDEOS,
    data: data
  };
};

const changeVideoCategorySuccess = (data) => {
  return {
    type: CHANGE_VIDEO_CATEGORY,
    data: data
  };
};

export const getVideoCategories = () => {
  return youTubeApi.getVideoCategories();
};

export const changeVideoCategory = (categoryId) => {
  return (dispatch) => {
    return youTubeApi.getVideos(10, null, categoryId)
      .then(response => {
        dispatch(changeVideoCategorySuccess(response));
        return response;
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



