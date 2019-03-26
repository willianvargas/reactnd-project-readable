import { combineReducers } from 'redux'
import data from '../components/PostList/reducers'
import categories from '../components/Categories/reducers'

export default combineReducers({
  posts: data,
  categories
})
