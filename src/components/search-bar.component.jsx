import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideos } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    props.fetchVideos('Cats');
  }

  componentDidUpdate() {
    console.log(this.props.videoList);
  }

  render() {
    const videoSearch = _.debounce((term) => { this.props.fetchVideos(term) }, 400);

    return(
      <div className="search-bar">
        <input
          className="form-control"
          type="text"
          onChange={(event) => videoSearch(event.target.value)}
        />
        <div>
          {}
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
