import { combineReducers } from 'redux';
import videoList from './videolist.reducer';

const rootReducer = combineReducers({
  videoList: videoList
});

export default rootReducer;
