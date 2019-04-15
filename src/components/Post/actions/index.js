import {
  setPostVote,
  addPost,
  editPost as editPostAPI,
  deletePost as deletePostAPI
} from '../../../utils/api'

import { normalizePostsShape } from '../../../utils/helpers'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const UPDATE_VOTESCORE = 'UPDATE_POST_VOTESCORE'
export const DELETE_POST = 'DELETE_POST'

export const handleAddVote = (id, type) => {
  return (dispatch) => {
    return setPostVote(id, type)
      .then(({ id, voteScore }) => {
        dispatch(updateVoteScore(id, voteScore))
      })
  }
}

export const handleAddPost = (payload) => {
  return (dispatch) => {
    return addPost(payload)
      .then((data) => {
        dispatch(receivePosts(normalizePostsShape([data])))
      })
  }
}

export const handleEditPost = (payload) => {
  return (dispatch) => {
    return editPostAPI(payload)
      .then((data) => {
        dispatch(receivePosts(normalizePostsShape([data])))
      })
  }
}

export const handleDelete = (id) => {
  return (dispatch) => {
    return deletePostAPI(id)
      .then(() => {
        dispatch(deletePost(id))
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

export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    id
  }
}
