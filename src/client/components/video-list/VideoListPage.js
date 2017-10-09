import React, {Component} from 'react'
import {loadVideos} from '../../actions/videos';
import {connect} from 'react-redux';
import VideoItem from "./VideoItem";
import './VideoListPage.scss';
import InfiniteScroll from 'react-infinite-scroller';


class VideoListPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hasMoreItems: true,
    };


    this.renderVideos = this.renderVideos.bind(this);
    this.loadVideos = this.loadVideos.bind(this);
  }

  renderVideos() {
    const {videos} = this.props;
    console.log(videos);
    return (
      <div className="d-flex flex-row flex-wrap">

      </div>
    );
  };

  loadVideos(e) {
    return this.props.loadVideos(10, this.props.nextPageToken);
  }


  render() {
    return (
      <div className="top-fix">
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadVideos}
          hasMore={this.state.hasMoreItems}
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
    nextPageToken: state.videoList.nextPageToken,
    videos: state.videoList.videos
  }
};

export default connect(mapStateToProps, {loadVideos})(VideoListPage);

