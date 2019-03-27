import { setPostVote } from '../../../../../utils/api'
import { updatePostVoteScore } from '../../../../PostList/actions'

const handlePostVote = (id, option) => {
  return (dispatch) => {
    return setPostVote(id, option)
      .then(({ id, voteScore }) => {
        dispatch(updatePostVoteScore(id, voteScore))
      })
  }
}

export default handlePostVote
