import { createStore, applyMiddleware, compose } from 'redux'

import { rootReducer } from './root.reducer'

export const configureStore = initialState => {
  const middlewareEnhancer = applyMiddleware()
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(middlewareEnhancer)
  )

  return store
}