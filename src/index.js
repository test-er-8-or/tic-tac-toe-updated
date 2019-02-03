import * as React from 'react'
import * as serviceWorker from './serviceWorker'

import App from './components/App'
import { Provider } from 'react-redux'
import configureStore from './state/store'
import { render } from 'react-dom'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
