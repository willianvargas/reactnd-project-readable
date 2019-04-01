import { setPostVote } from '../../../utils/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const UPDATE_VOTESCORE = 'UPDATE_POST_VOTESCORE'

export const handleAddVote = (id, type) => {
  return (dispatch) => {
    return setPostVote(id, type)
      .then(({ id, voteScore }) => {
        dispatch(updateVoteScore(id, voteScore))
      })
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export const updateVoteScore = (id, voteScore) => {
  return {
    type: UPDATE_VOTESCORE,
    id,
    voteScore
  }
}
