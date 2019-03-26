import { postSorting } from '../actions'

const getPostsWithSorting = (posts, sorting) => {
  switch (sorting) {
    case postSorting.SORT_BY_SCORE:
      return Object
        .keys(posts)
        .sort((a, b) => posts[b].voteScore - posts[a].voteScore)
    case postSorting.SORT_BY_NEW:
      return Object
        .keys(posts)
        .sort((a, b) => posts[b].timestamp - posts[a].timestamp)
    case postSorting.SORT_BY_OLD:
      return Object
        .keys(posts)
        .sort((a, b) => posts[a].timestamp - posts[b].timestamp)
    default:
      throw new Error('Unknown sorting: ' + sorting)
  }
}

export default getPostsWithSorting
