import { SORT_BY_SCORE, UPDATE_SORTING } from '../actions'

const sorting = (state = SORT_BY_SCORE, action) => {
  switch (action.type) {
    case UPDATE_SORTING:
      return action.sorting
    default:
      return state
  }
}

export default sorting
