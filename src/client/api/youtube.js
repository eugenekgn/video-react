import axios from 'axios';

class YoutubeApi {
  static getVideos(take = 10, pageToken, videoCategoryId) {


    const pageTokenPart = pageToken ? `&pageToken=${pageToken}` : '';
    const videoCategoryPart = videoCategoryId ? `&videoCategoryId=${videoCategoryId}` : '';
    console.log(videoCategoryId);
    return axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=${take}&key=AIzaSyA9GmqA95EB6SmOQNwNQeWK61mwKT0dZB0${pageTokenPart}${videoCategoryPart}`)
      .then(response => response.data)
  };

  static getVideoCategories() {
    return axios.get(`https://www.googleapis.com/youtube/v3/videoCategories?key=AIzaSyA9GmqA95EB6SmOQNwNQeWK61mwKT0dZB0&part=snippet&regionCode=US`)
      .then(response => response.data.items);
  };
}

export default YoutubeApi;