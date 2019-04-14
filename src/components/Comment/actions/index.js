import {
  setCommentVote,
  editComment as editCommentAPI,
  deleteComment as deleteCommentAPI
} from '../../../utils/api'

import { normalizeCommentsShape } from '../../../utils/helpers'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const UPDATE_VOTESCORE = 'UPDATE_VOTESCORE'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export const handleAddVote = (id, type) => {
  return (dispatch) => {
    return setCommentVote(id, type)
      .then(({ id, voteScore }) => {
        dispatch(updateVoteScore(id, voteScore))
      })
  }
}

export const handleEdit = (payload) => {
  return (dispatch) => {
    return editCommentAPI(payload)
    .then((data) => {
      dispatch(receiveComments(normalizeCommentsShape([data])))
    })
  }
}

export const handleDelete = (id) => {
  return (dispatch) => {
    return deleteCommentAPI(id)
      .then(() => {
        dispatch(deleteComment(id))
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

export const deleteComment = (id) => {
  return {
    type: DELETE_COMMENT,
    id
  }
}
