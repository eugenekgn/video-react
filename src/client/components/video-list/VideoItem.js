import React from 'react';
import YouTube from 'react-youtube';

const VideoItem = ({ videoId, options }) => {

  const opts = options || {
    height: 'inheret',
    width: 'inheret',
    playerVars: {
      autoplay: 1
    }
  };

  return (
    <div className="p-2 col-lg-6 col-md-6 col-sm-6 col-12">
      <div className="embed-responsive embed-responsive-16by9">
        <YouTube
          videoId={videoId}
          opt={opts}
          className="embed-responsive-item"
        />
      </div>
    </div>
  )
};

VideoItem.propTypes = {
  videoId: React.PropTypes.string.isRequired,
  options: React.PropTypes.object
};

export default VideoItem;


