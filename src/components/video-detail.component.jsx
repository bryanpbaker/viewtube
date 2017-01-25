import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class VideoDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.activeVideo) {
      return (
        <div className="video-detail col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe src="https://www.youtube.com/embed/5dsGWM5XGdg" frameBorder="0" allowFullScreen></iframe>
          </div>
          <h2>Cats are so funny you will die laughing - Funny cat compilation</h2>
        </div>
      )
    }

    return(
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe src={`https://www.youtube.com/embed/${this.props.activeVideo.id.videoId}`} frameBorder="0" allowFullScreen></iframe>
        </div>
        <h2>{this.props.activeVideo.snippet.title}</h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeVideo: state.activeVideo,
    videoList: state.videoList
  };
}

export default connect(mapStateToProps)(VideoDetail);
