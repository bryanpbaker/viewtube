import { VIEW_VIDEO } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
  case VIEW_VIDEO:
    return action.payload;
  }

  return state;
}
