import * as React from 'react'

import App from './'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore({ moves: [4, 0, 1] })

describe('components:App', () => {
  it('renders the App with a blank game board and nine squares', () => {
    expect(
      toJson(
        shallow(
          <Provider store={store}>
            <App />
          </Provider>
        )
          .first()
          .render()
      )
    ).toMatchSnapshot()
  })
})
