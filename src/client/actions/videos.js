import { LOAD_VIDEOS } from './actionTypes';
import axios from 'axios';
// import { KEY } from '../config';



export const loadVideos = (take = 10, pageToken) => {
  const pageTokenPart = pageToken ? `&pageToken=${pageToken}` : '';
  return axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=${take}&key=AIzaSyA9GmqA95EB6SmOQNwNQeWK61mwKT0dZB0${pageTokenPart}`)
    .then(response => response.data);
};

