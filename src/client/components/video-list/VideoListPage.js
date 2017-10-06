import React, { Component } from 'react'
import { loadVideos } from '../../actions/videos';
import { connect } from 'react-redux';
import data from '../../data.json';
import VideoItem from "./VideoItem";
import './VideoListPage.scss';
import InfiniteScroll from 'react-infinite-scroller';


class VideoListPage extends Component {

  constructor(props) {
    super(props);

    this.videos = [];

    this.loadVideos = this.loadVideos.bind(this);
    this.nextPageToken = null;
  }

  loadVideos() {
    loadVideos(10, this.nextPageToken).then((data) => {
      const loadedVideos = data.items.map((video, index) => this.videos.push(
        <VideoItem key={video.id} videoId={video.id} />
      ));
      this.forceUpdate();
      this.nextPageToken = data.nextPageToken;
    })
  }

  renderVideos() {
    return (
      <div className="d-flex flex-row flex-wrap">
        {this.videos}
      </div>
    );
  };


  render() {
    return (
      <div className="top-fix">
        <InfiniteScroll
          pageStart={1}
          loadMore={this.loadVideos}
          hasMore={true}
          loader={<div className="loader">Loading ...</div>}
        >
          {this.renderVideos()}
        </InfiniteScroll>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    videos: state.videos
  }
};

export default connect(mapStateToProps, { loadVideos })(VideoListPage);

