import { addPostComment } from '../../../utils/api'
import { addComment } from '../../Comment/actions'

const handleAddComment = (data) => {
  return (dispatch) => {
    return addPostComment(data)
      .then((data) => {
        dispatch(addComment(data))
      })
  }
}

export default handleAddComment
