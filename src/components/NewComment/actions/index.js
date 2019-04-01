export const handleAddComment = (id, text) => {
  return (dispatch) => {
    return setCommentVote(id, type)
      .then(({ id, voteScore }) => {
        dispatch(updateVoteScore(id, voteScore))
      })
  }
}
