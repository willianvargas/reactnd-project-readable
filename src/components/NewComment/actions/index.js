import { addPostComment } from '../../../utils/api'
import { normalizeCommentsShape } from '../../../utils/helpers'
import { receiveComments } from '../../Comment/actions'

const handleAddComment = (data) => {
  return (dispatch) => {
    return addPostComment(data)
      .then((data) => {
        dispatch(receiveComments(normalizeCommentsShape([data])))
      })
  }
}

export default handleAddComment
