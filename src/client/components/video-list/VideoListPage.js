import React, {Component} from 'react'
import {loadVideos} from '../../actions/videos';
import {connect} from 'react-redux';
import data from '../../data.json';
import VideoItem from "./VideoItem";
import './VideoListPage.scss';

class VideoListPage extends Component {

  constructor(props) {
    super(props);

    this.buildVideos = this.buildVideos.bind(this);
  }

  buildVideos() {

    //ERROR: could not use this because of some wierd Youtube error
    // const skip = 0;
    // const take = 10;
    //
    // loadVideos(skip, take).then(() => {
    //
    // })

    const cells = data.items.map((video, index) => <VideoItem key={index} name={video.snippet.title} id={video.id}/>);
    return <div className="d-flex flex-row">{cells}</div>

  };

  render() {
    return (
      <div className="flex-wrap">
        {this.buildVideos()}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    videos: state.videos
  }
};

export default connect(mapStateToProps, {loadVideos})(VideoListPage);

