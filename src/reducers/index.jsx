import { combineReducers } from 'redux';
import videoList from './videolist.reducer';
import activeVideo from './activeVideo.reducer';

const rootReducer = combineReducers({
  videoList: videoList,
  activeVideo: activeVideo
});

export default rootReducer;
