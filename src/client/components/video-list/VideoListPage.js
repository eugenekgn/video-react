import React, {Component} from 'react'
import {loadVideos} from '../../actions/videos';
import {connect} from 'react-redux';
import data from '../../data.json';
import VideoItem from "./VideoItem";

class VideoListPage extends Component {

  constructor(props) {
    super(props);

    this.buildVideos = this.buildVideos.bind(this);
    this.buildRow = this.buildRow.bind(this);
  }


  //TODO: this is a shortcut
  buildRow(cells) {
    return <div className="d-flex flex-row">{cells}</div>
  }

  buildVideos() {

    //ERROR: could not use this because of some wierd Youtube error
    // const skip = 0;
    // const take = 10;
    //
    // loadVideos(skip, take).then(() => {
    //
    // })

    const videosPerRow = 5;

    const rows = [];
    const cells = [];
    return data.items.map((video, index) => {
        if (cells.length === videosPerRow) {
          const row = this.buildRow(cells);
          rows.push(row);
          cells.length = 0;
        } else {
          cells.push(<VideoItem key={index} name={video.snippet.title} id={video.id}/>)
        }
        return rows;
      }
    )

  };

  render() {
    return (
      <div className="container">
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

