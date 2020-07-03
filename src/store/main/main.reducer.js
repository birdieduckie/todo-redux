import { TASK_ADD, TASK_DELETE, TASK_TOGGLE, SET_FILTER, filters } from './main.actions'

const initialState = {
  tasks: [],
  filter: filters.SHOW_ALL
}

const handleTaskDelete = (state, action) => {
  const updatedTasks = state.tasks.filter((task) => task.id !== action.id)

  return { ...state, tasks: updatedTasks }
}


export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ADD:
      return { ...state, zhopa: action.content }

    case TASK_DELETE:
      return handleTaskDelete(state, action)

    case TASK_TOGGLE:
      return state
    
    case SET_FILTER:
      return { ...state, filter: action.filter}

    default:
      return state
  }
}