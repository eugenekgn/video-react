import axios from 'axios';

class YoutubeApi {
  static getVideos(take = 10, pageToken) {

    return new Promise((resolve, reject) => {
      resolve({
        videos: [{ test: 'test' }, { test: 'test' }, { test: 'test' }, { test: 'test' }, { test: 'test' }, { test: 'test' }, { test: 'test' }],
        nextPageToken: 'XYD'
      });
    })

    // const pageTokenPart = pageToken ? `&pageToken=${pageToken}` : '';
    // return axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=${take}&key=AIzaSyA9GmqA95EB6SmOQNwNQeWK61mwKT0dZB0${pageTokenPart}`)
    //   .then(response => response.data)
  };

  static getVideoCategories() {
    return axios.get(`https://www.googleapis.com/youtube/v3/videoCategories?key=AIzaSyA9GmqA95EB6SmOQNwNQeWK61mwKT0dZB0&part=snippet&regionCode=US`)
      .then(response => response.data.items);
  };
}

export default YoutubeApi;