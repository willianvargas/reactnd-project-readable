const getPostComments = (comments, postId) => {
  return Object
    .keys(comments)
    .filter(key => comments[key].parentId === postId)
    .sort((a, b) => comments[b].voteScore - comments[a].voteScore)
}

export default getPostComments
