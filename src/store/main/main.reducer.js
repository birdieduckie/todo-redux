import { TASK_ADD, TASK_DELETE, TASK_TOGGLE, SET_FILTER, filters } from './main.actions'

const initialState = {
  tasks: [],
  filter: filters.SHOW_ALL
}

const handleTaskAdd = (state, action) => {
  if (action.content) {
    const newTask = { id: +new Date(), content: action.content, isCompleted: false }

    return { ...state, tasks: [...state.tasks, newTask] }
  }

  return state
}

const handleTaskDelete = (state, action) => {
  const updatedTasks = state.tasks.filter(task => task.id !== action.id)

  return { ...state, tasks: updatedTasks }
}

const handleTaskToggle = (state, action) => {
  const updatedTasks = state.tasks.map(task =>
    task.id === action.payload.id
      ? ({ ...task, isCompleted: action.payload.isCompleted })
      : task
  )

  return { ...state, tasks: updatedTasks }
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ADD:
      return handleTaskAdd(state, action)

    case TASK_DELETE:
      return handleTaskDelete(state, action)

    case TASK_TOGGLE:
      return handleTaskToggle(state, action)
    
    case SET_FILTER:
      return { ...state, filter: action.filter }

    default:
      return state
  }
}

// фильтры + новые действия для локал сторадж + 