import React from 'react';
import YouTube from 'react-youtube';

const VideoItem = ({videoId, id, options}) => {

  const opts = options || {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1
    }
  };

  return (
    <div className="p-2">
      <YouTube
        videoId={videoId}
        id={id}
        opt={opts}
      />
    </div>
  )
};

VideoItem.propTypes = {
  videoId: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  options: React.PropTypes.object.isRequired,
};

export default VideoItem;

