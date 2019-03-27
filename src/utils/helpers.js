
export const normalizeCategoriesShape = (list) => {
  const state = {}
  list.forEach(cat => state[cat.name] = cat)
  return state
} 

export const normalizePostsShape = (list) => {
  const state = {}
  list.forEach(post => state[post.id] = post)
  return state
} 

export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }
  return date.toLocaleDateString(undefined, options)
}
