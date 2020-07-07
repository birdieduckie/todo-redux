export const TASK_ADD = 'TASK_ADD'
export const TASK_DELETE = 'TASK_DELETE'
export const TASK_TOGGLE = 'TASK_TOGGLE'
export const SET_FILTER = 'SET_FILTER'

export const taskAdd = content => ({
  type: TASK_ADD,
  content
})

export const taskDelete = id => ({
  type: TASK_DELETE,
  id
})

export const taskToggle = (id, isCompleted) => ({
  type: TASK_TOGGLE,
  payload: { id, isCompleted }
})

export const setFilter = filter => ({
  type: 'SET_FILTER',
  filter
})


export const filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_INCOMPLETED: 'SHOW_INCOMPLETED'
}