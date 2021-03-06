import YTSearch from 'youtube-api-search';

export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const VIEW_VIDEO = 'VIEW_VIDEO';

// YouTube api credentials
const API_KEY = 'AIzaSyBXECxVWEZzSo6A53ZHGxAUsPRHdGs4-Ms';

export function fetchVideos(searchTerm) {
  return (dispatch) => {
    YTSearch({ key: API_KEY, term: searchTerm }, function(videos) {
      dispatch({
        type: FETCH_VIDEOS,
        payload: videos
      })
    });
  }
}

export function viewVideo(video) {
  return {
    type: VIEW_VIDEO,
    payload: video
  }
}
