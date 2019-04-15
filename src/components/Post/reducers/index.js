import { RECEIVE_POSTS, UPDATE_VOTESCORE, DELETE_POST } from '../actions'
import { normalizePostsShape } from '../../../utils/helpers'

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
    case DELETE_POST: {
        return normalizePostsShape(
          Object
            .keys(state)
            .map(key => state[key])
            .filter(p => p.id !== action.id)
        )
      }
    default :
      return state
  }
}

export default posts
