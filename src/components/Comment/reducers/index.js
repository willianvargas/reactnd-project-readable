import { RECEIVE_COMMENTS, UPDATE_VOTESCORE, DELETE_COMMENT } from '../actions'
import { normalizeCommentsShape } from '../../../utils/helpers'

const comments = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return {
        ...state,
        ...action.comments
      }
    case UPDATE_VOTESCORE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: action.voteScore
        }
      }
    case DELETE_COMMENT: {
      return normalizeCommentsShape(
        Object
          .keys(state)
          .map(key => state[key])
          .filter(c => c.id !== action.id)
      )
    }
    default:
      return state
  }
}

export default comments
