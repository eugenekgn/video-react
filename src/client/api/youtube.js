import axios from 'axios';

const KEY = 'AIzaSyA9GmqA95EB6SmOQNwNQeWK61mwKT0dZB0';


class YoutubeApi {
  static getVideos(take = 10, pageToken, videoCategoryId) {
    const pageTokenPart = pageToken ? `&pageToken=${pageToken}` : '';
    const videoCategoryPart = videoCategoryId ? `&videoCategoryId=${videoCategoryId}` : '';
    return axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=${take}&key=${KEY}${pageTokenPart}${videoCategoryPart}`)
      .then(response => response.data);
  }

  static getVideoCategories() {
    return axios.get(`https://www.googleapis.com/youtube/v3/videoCategories?key=${KEY}&part=snippet&regionCode=US`)
      .then(response => response.data.items);
  }
}

export default YoutubeApi;
