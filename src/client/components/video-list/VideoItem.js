import React from 'react';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';

const VideoItem = ({videoId, options}) => {
  const opts = options || {
    height: 'inherent',
    width: 'inherent',
    playerVars: {
      autoplay: 1,
    },
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
  );
};

VideoItem.propTypes = {
  videoId: PropTypes.string.isRequired,
  options: PropTypes.object,
};

export default VideoItem;
