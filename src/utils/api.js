const api = 'http://localhost:3001'

const requestPayload = (method, data) => {
  const payload = {
    method,
    headers: {
      Accept: 'application/json',
      Authorization: '123'
    }
  }
  if (['POST', 'PUT'].includes(method)) {
    payload.headers = {
      ...payload.headers,
      'Content-Type': 'application/json'
    }
  }
  if (data) {
    payload['body'] = JSON.stringify(data)
  }
  return payload
}

/**
 * Get all of the categories available for the app
 * List is found in categories.js. Feel free to extend 
 * this list as you desire
 */
export const getCategories = () =>
  fetch(`${api}/categories`, requestPayload('GET'))
    .then(res => res.json())
    .then(data => data.categories)

/**
 * Get all of the posts for a particular category
 * 
 * @param {string} id
 */
export const getCategoryPosts = (id) =>
  fetch(`${api}/${id}/posts`, requestPayload('GET'))
    .then(res => res.json())
    .then(data => data.posts)

/**
 * Get all of the posts. Useful for the main page when no 
 * category is selected
 */
export const getPosts = () =>
  fetch(`${api}/posts`, requestPayload('GET'))
    .then(res => res.json())

/**
 * Add a new post
 * 
 * @param {object} data
 * @param {string} data.id - UUID should be fine, but any unique id will work
 * @param {string} data.timestamp - Can in whatever format you like, you can use Date.now() if you like
 * @param {string} data.title
 * @param {string} data.body
 * @param {string} data.author
 * @param {string} data.category - Any of the categories listed in categories.js
 */
export const addPost = (data) =>
  fetch(`${api}/posts`, requestPayload('POST', data))
    .then(res => res.json())

/**
 * Get the details of a single post
 * 
 * @param {string} id
 */
export const getPost = (id) =>
  fetch(`${api}/posts/${id}`, requestPayload('GET'))
    .then(res => res.json())
    .then(data => data.post)

/**
 * Used for voting on a post
 * 
 * @param {string} id
 * @param {string} option - Either "upVote" or "downVote"
 */
export const setPostVote = (id, option) =>
  fetch(`${api}/posts/${id}`, requestPayload('POST', { option }))
    .then(res => res.json())

/**
 * Edit the details of an existing post
 * 
 * @param {object} data.id
 * @param {string} data.title
 * @param {string} data.body
 */
export const editPost = (data) =>
  fetch(`${api}/posts/${data.id}`, requestPayload('PUT', data))
    .then(res => res.json())

/**
 * Sets the deleted flag for a post to 'true'
 * Sets the parentDeleted flag for all child comments to 'true'
 * 
 * @param {string} id 
 */
export const deletePost = (id) =>
  fetch(`${api}/posts/${id}`, requestPayload('DELETE'))
    .then(res => res.json())

/**
 * Get all the comments for a single post
 * 
 * @param {string} id
 */
export const getPostComments = (id) =>
  fetch(`${api}/posts/${id}/comments`, requestPayload('GET'))
    .then(res => res.json())
    .then(data => data.comments)

/**
 * Add a comment to a post
 * 
 * @param {object} data.id - Any unique ID. As with posts, UUID is probably the best here
 * @param {string} data.timestamp
 * @param {string} data.body
 * @param {string} data.author
 * @param {string} data.parentId - Should match a post id in the database
 */
export const addPostComment = (data) =>
  fetch(`${api}/comments`, requestPayload('POST', data))
    .then(res => res.json())

/**
 * Get the details for a single comment
 * 
 * @param {string} id
 */
export const getComment = (id) =>
  fetch(`${api}/comments/${id}`, requestPayload('GET'))
    .then(res => res.json())
    .then(data => data.comment)

/**
 * Used for voting on a comment
 * 
 * @param {string} id
 * @param {string} option - Either "upVote" or "downVote"
 */
export const setCommentVote = (id, option) =>
  fetch(`${api}/comments/${id}`, requestPayload('POST', { option }))
    .then(res => res.json())

/**
 * Edit the details of an existing comment
 * 
 * @param {object} data.id
 * @param {string} data.timestamp
 * @param {string} data.body
 */
export const editComment = (data) =>
  fetch(`${api}/comments/${data.id}`, requestPayload('PUT', data))
    .then(res => res.json())

/**
 * Sets a comment's deleted flag to 'true'
 * 
 * @param {string} id 
 */
export const deleteComment = (id) =>
  fetch(`${api}/comments/${id}`, requestPayload('DELETE'))
    .then(res => res.json())
