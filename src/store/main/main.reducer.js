import { TASK_ADD, TASK_DELETE, TASK_TOGGLE, FILTERTYPE_SWITCH } from './main.actions'

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  filterType: 'all'
}

const saveTasks = tasks => localStorage.setItem('tasks', JSON.stringify(tasks))

const handleTaskAdd = (state, action) => {
  if (action.content) {
    const newTask = { id: +new Date(), content: action.content, isCompleted: false }

    const updatedTasks = [...state.tasks, newTask]

    saveTasks(updatedTasks)

    return { ...state, tasks: updatedTasks }
  }

  return state
}

const handleTaskDelete = (state, action) => {
  const updatedTasks = state.tasks.filter(task => task.id !== action.id)

  saveTasks(updatedTasks)

  return { ...state, tasks: updatedTasks }
}

const handleTaskToggle = (state, action) => {
  const updatedTasks = state.tasks.map(task =>
    task.id === action.payload.id
      ? ({ ...task, isCompleted: action.payload.isCompleted })
      : task
  )

  saveTasks(updatedTasks)

  return { ...state, tasks: updatedTasks }
}

const switchFilterType = (state, action) => ({ ...state, filterType: action.filter })

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ADD:
      return handleTaskAdd(state, action)

    case TASK_DELETE:
      return handleTaskDelete(state, action)

    case TASK_TOGGLE:
      return handleTaskToggle(state, action)
    
    case FILTERTYPE_SWITCH:
      return switchFilterType(state, action)

    default:
      return state
  }
}
