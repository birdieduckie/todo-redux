import { combineReducers } from 'redux'

import { mainReducer } from './main/main.reducer'

export const rootReducer = combineReducers({
  main: mainReducer
})