import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideos } from '../actions/index';
import { viewVideo } from '../actions/index';

class VideoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.videoList) {
      const videos = this.props.videoList.map((video) => {
        return (
          <VideoListItem
            key={video.etag}
            title={video.snippet.title}
            thumbnail={video.snippet.thumbnails.default.url}
            channelTitle={video.snippet.channelTitle}
            description={video.snippet.description}
            video={video}
            viewVideo={this.props.viewVideo}
          />
        )
      });

      return(
        <div className="video-list col-md-4">
          {videos}
        </div>
      )
    }
  }
}

const VideoListItem = (props) => {
  return(
    <div className="video-list-item clearfix" onClick={() => props.viewVideo(props.video)}>
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

function mapStateToProps(state) {
  return {
    videoList: state.videoList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos, viewVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
