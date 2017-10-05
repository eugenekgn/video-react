import {LOAD_VIDEOS} from './actionTypes';
import axios from 'axios';
import {KEY} from '../config';



export const loadVideos = (skip, take = 10) => {
  //ERROR: //Project 921402453077 is not found and cannot be used for API calls. If it is recently created, enable YouTube Data API by visiting https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=921402453077 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.
  return axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=${take}&key=${KEY}`)
    .then(response => response.json());
};

