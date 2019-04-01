import { RECEIVE_COMMENTS, UPDATE_VOTESCORE } from '../actions'

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
    default:
      return state
  }
}

export default comments
