import { combineReducers } from 'redux'

import { RECEIVE_POSTS, UPDATE_POST_VOTESCORE } from '../actions'
import sorting from '../components/SortingBtn/reducers'

const data = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        ...action.posts
      }
    case UPDATE_POST_VOTESCORE: {
      const { id, voteScore } = action
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore
        }
      }
    }
    default :
      return state
  }
}

export default combineReducers({
  data,
  sorting
})
