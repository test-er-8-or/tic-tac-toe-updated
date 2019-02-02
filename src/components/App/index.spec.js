import * as React from 'react'

import App from './'
import { shallow } from 'enzyme'

describe('components:App', () => {
  it('matches the snapshot', () => {
    expect(toJson(shallow(<App />).dive())).toMatchSnapshot()
  })
})
