export const SORT_BY_SCORE = 'SORT_BY_SCORE'
export const SORT_BY_NEW = 'SORT_BY_NEW'
export const SORT_BY_OLD = 'SORT_BY_OLD'
export const UPDATE_SORTING = 'UPDATE_SORTING'

export const updateSorting = (sorting) => {
  return {
    type: UPDATE_SORTING,
    sorting
  }
}

export const postSorting = {
  SORT_BY_SCORE,
  SORT_BY_NEW,
  SORT_BY_OLD
}
