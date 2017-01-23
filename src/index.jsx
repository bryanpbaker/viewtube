import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app.component';
import Test from './components/test.component';

import '../style/main.scss';

import reducers from './reducers';

const createStoreWithMiddleWare = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="test" component={Test} />
        </Route>
    </Router>
  </Provider>
, document.querySelector('.container'));
