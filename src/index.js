import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './store'

import { App } from './core/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = configureStore()

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

if (module.hot) {
  module.hot.accept('./core/App', renderApp)
}

renderApp()