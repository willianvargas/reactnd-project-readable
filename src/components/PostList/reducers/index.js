import { combineReducers } from 'redux'

import { RECEIVE_POSTS } from '../actions'
import sorting from '../components/SortingBtn/reducers'

const data = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS :
      return {
        ...state,
        ...action.posts
      }
    default :
      return state
  }
}

export default combineReducers({
  data,
  sorting
})
