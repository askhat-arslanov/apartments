import * as t from '../types/flat-types'

export const toggleSelectedFlatId = id => ({
  type: t.TOGGLE_SELECTED_FLAT_ID,
  payload: { id }
})
