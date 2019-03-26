import { getCategories, getPosts } from '../../../utils/api'
import { normalizePostsShape, normalizeCategoriesShape } from '../../../utils/helpers'
import { receivePosts } from '../../PostList/actions'
import { receiveCategories } from '../../Categories/actions'

const handleInitialData = () => {
  return (dispatch) => {
    return Promise.all([
      getCategories(),
      getPosts()
    ]).then(([ categories, posts ]) => {
      dispatch(receiveCategories(normalizeCategoriesShape(categories)))
      dispatch(receivePosts(normalizePostsShape(posts)))
    })
  }
}

export default handleInitialData
