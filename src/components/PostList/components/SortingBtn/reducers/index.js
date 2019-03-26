import { SORT_BY_SCORE } from '../../../actions'
import { SET_POST_SORTING } from '../actions'

const sorting = (state = SORT_BY_SCORE, action) => {
  switch (action.type) {
    case SET_POST_SORTING:
      return action.sorting
    default:
      return state
  }
}

export default sorting
