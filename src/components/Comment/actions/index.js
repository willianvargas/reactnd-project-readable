import { setCommentVote } from '../../../utils/api'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const UPDATE_VOTESCORE = 'UPDATE_VOTESCORE'

export const handleAddVote = (id, type) => {
  return (dispatch) => {
    return setCommentVote(id, type)
      .then(({ id, voteScore }) => {
        dispatch(updateVoteScore(id, voteScore))
      })
  }
}

export const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}

export const updateVoteScore = (id, voteScore) => {
  return {
    type: UPDATE_VOTESCORE,
    id,
    voteScore
  }
}
