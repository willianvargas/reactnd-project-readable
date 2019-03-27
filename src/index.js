import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'

import { unregister } from './serviceWorker'
import reducer from './reducers'
import middleware from './middleware'

import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(middleware),
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

unregister()
