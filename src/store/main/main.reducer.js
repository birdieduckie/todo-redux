import { TASK_ADD } from './main.actions'

const initialState = {
  tasks: []
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ADD:
      return { ...state, zhopa: action.content }

      default:
        return state
  }
}