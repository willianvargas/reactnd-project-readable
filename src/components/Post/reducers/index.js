import { RECEIVE_POSTS, UPDATE_VOTESCORE, DELETE_POST } from '../actions'
import { ADD_COMMENT, DELETE_COMMENT } from '../../Comment/actions'
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
    case DELETE_POST:
      return normalizePostsShape(
        Object
          .keys(state)
          .map(key => state[key])
          .filter(p => p.id !== action.id)
      )
    case ADD_COMMENT: {
      const { parentId } = action.comment
      return {
        ...state,
        [parentId]: {
          ...state[parentId],
          commentCount: state[parentId].commentCount + 1
        }
      }
    }
    case DELETE_COMMENT: {
      const { parentId } = action.comment
      return {
        ...state,
        [parentId]: {
          ...state[parentId],
          commentCount: state[parentId].commentCount - 1
        }
      }
    }
    default :
      return state
  }
}

export default posts
