import { RECEIVE_POSTS, UPDATE_VOTESCORE } from '../actions'

const posts = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        ...action.posts
      }
    case UPDATE_VOTESCORE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: action.voteScore
        }
      }
    default :
      return state
  }
}

export default posts
