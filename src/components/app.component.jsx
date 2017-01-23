import React from 'react';
import { Link } from 'react-router';

import Header from './header.component';

const App = (props) => {
    return (
        <div className="app">
            <Header />
            <Link to="/">Home</Link> &nbsp; <Link to="test">Test Route</Link>
            {props.children}
        </div>
    );
};

export default App;
