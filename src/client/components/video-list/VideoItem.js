import React from 'react';
import YouTube from 'react-youtube';

const VideoItem = ({videoId, id, options}) => {

  const opts = options || {
    height: '50px',
    width: '50px',
    playerVars: {
      autoplay: 1
    }
  };
  console.log(opts);
  return (
    <div className="p-2 videoItem">
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

