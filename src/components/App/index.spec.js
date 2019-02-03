import * as React from 'react'

import App from './'
import { shallow } from 'enzyme'

describe('components:App', () => {
  it('matches the snapshot', () => {
    expect(toJson(shallow(<App />))).toMatchSnapshot()
  })

  it('matches the snapshot with three moves: center, top-left, top-right', () => {
    expect(toJson(shallow(<App moves={[4, 0, 2]} />))).toMatchSnapshot()
  })
})
