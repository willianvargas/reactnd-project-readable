
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
