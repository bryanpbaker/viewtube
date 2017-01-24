import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideos } from '../actions/index';

import VideoListItem from './video-list-item.component';

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
          />
        )
      });

      return(
        <div className="video-list col-md-5">
          {videos}
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    videoList: state.videoList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
