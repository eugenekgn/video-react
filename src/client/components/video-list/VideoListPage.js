import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';
import './VideoListPage.scss';
import { loadVideos } from '../../actions/videos';


class VideoListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMoreItems: false,
    };


    this.renderVideos = this.renderVideos.bind(this);
    this.loadVideos = this.loadVideos.bind(this);
  }

  renderVideos() {
    const { videos } = this.props;
    return (
      <div className="d-flex flex-row flex-wrap">
        {videos.map(video => <VideoItem key={video.id} videoId={video.id} />)}
      </div>
    );
  }

  componentDidMount() {
    this.props.loadVideos(10, this.props.nextPageToken);
    this.setState({ hasMoreItems: true });
  }

  loadVideos(e) {
    return this.props.loadVideos(10, this.props.nextPageToken);
  }

  render() {
    return (
      <div className="top-fix">
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadVideos}
          initialLoad={false}
          hasMore={this.state.hasMoreItems}
          loader={<div className="loader">Loading ...</div>}
        >
          {this.renderVideos()}
        </InfiniteScroll>
      </div>
    );
  }
}


VideoListPage.propTypes = {
  videos: PropTypes.array.isRequired,
  nextPageToken: PropTypes.string,
  loadVideos: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  nextPageToken: state.videoList.nextPageToken,
  videos: state.videoList.videos,
});

export default connect(mapStateToProps, { loadVideos })(VideoListPage);

