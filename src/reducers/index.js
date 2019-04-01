import { combineReducers } from 'redux'
import posts from '../components/Post/reducers'
import categories from '../components/Categories/reducers'
import comments from '../components/Comment/reducers'
import sorting from '../components/PostList/reducers'

export default combineReducers({
  posts,
  categories,
  comments,
  sorting
})
