import * as t from '../types/flat-types'

const initialState = {
  selectedFlatIds: []
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case t.TOGGLE_SELECTED_FLAT_ID:
      const { id } = payload
      
      let selectedFlatIds = [...state.selectedFlatIds]
      selectedFlatIds = selectedFlatIds.includes(id)
        ? selectedFlatIds.filter(flatId => flatId !== id)
        : [...selectedFlatIds, id]

      return {
        ...state,
        selectedFlatIds
      }

    default:
      return state
  }
}
