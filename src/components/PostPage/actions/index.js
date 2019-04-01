import { getPostComments } from '../../../utils/api'
import { normalizeCommentsShape } from '../../../utils/helpers'
import { receiveComments } from '../../Comment/actions'

export const handlePostComments = (id) => {
  return (dispatch) => {
    return getPostComments(id)
      .then((comments) => {
        dispatch(receiveComments(normalizeCommentsShape(comments)))
      })
  }
}

export default handlePostComments
