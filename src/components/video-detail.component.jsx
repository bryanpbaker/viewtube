import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class VideoDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe src="https://www.youtube.com/embed/35jmCmjFxsM" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeVideo: state.activeVideo
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchVideos }, dispatch);
// }

export default connect(mapStateToProps)(VideoDetail);
