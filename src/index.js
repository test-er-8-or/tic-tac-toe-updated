import * as React from 'react'
import * as serviceWorker from './serviceWorker'

import App from './components/App'
import { render } from 'react-dom'

render(<App />, document.getElementById('root'))

serviceWorker.unregister()
