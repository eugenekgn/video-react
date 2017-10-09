import { LOAD_VIDEOS, CHANGE_VIDEO_CATEGORY } from './actionTypes';
import youTubeApi from '../api/youtube';

const loadVideosSuccess = data => ({
  type: LOAD_VIDEOS,
  data,
});

const changeVideoCategorySuccess = data => ({
  type: CHANGE_VIDEO_CATEGORY,
  data,
});

const getVideoCategories = () => youTubeApi.getVideoCategories();

const changeVideoCategory =
  categoryId =>
    dispatch =>
      youTubeApi.getVideos(10, null, categoryId)
        .then((response) => {
          dispatch(changeVideoCategorySuccess(response));
          return response;
        }).catch((error) => {
          throw (error);
        });

const loadVideos =
  (take = 10, pageToken) =>
    dispatch =>
      youTubeApi.getVideos(take, pageToken)
        .then((response) => {
          dispatch(loadVideosSuccess(response));
        }).catch((error) => {
          throw (error);
        });

export {
  getVideoCategories,
  changeVideoCategory,
  loadVideos,
};
