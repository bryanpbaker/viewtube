import React from 'react';

const VideoListItem = (props) => {
  return(
    <div className="video-list-item clearfix">
      <div className="col-xs-3 img-container">
        <img
          src={props.thumbnail}
          alt="{props.title}"/>
      </div>
      <div className="col-xs-9">
        <h5>{props.title}</h5>
        <span className="channel">{props.channelTitle}</span>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default VideoListItem;
