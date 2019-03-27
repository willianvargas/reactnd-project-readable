export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SORT_BY_SCORE = 'SORT_BY_SCORE'
export const SORT_BY_NEW = 'SORT_BY_NEW'
export const SORT_BY_OLD = 'SORT_BY_OLD'
export const UPDATE_POST_VOTESCORE = 'UPDATE_POST_VOTESCORE'

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export const postSorting = {
  SORT_BY_SCORE,
  SORT_BY_NEW,
  SORT_BY_OLD
}

export const updatePostVoteScore = (id, voteScore) => {
  return {
    type: UPDATE_POST_VOTESCORE,
    id,
    voteScore
  }
}
