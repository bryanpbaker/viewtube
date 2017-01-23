import React from 'react';
import { Link } from 'react-router';

import Header from './header.component';
import SearchBar from './search-bar.component';
import VideoDetail from './video-detail.component';
import VideoList from './video-list.component';

const App = (props) => {
    return (
        <div className="app">
            <Header />
            <SearchBar />
            <div className="row">
              <VideoDetail />
              <VideoList />
            </div>
        </div>
    );
};

export default App;
