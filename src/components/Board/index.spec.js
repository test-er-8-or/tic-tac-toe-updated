import * as React from 'react'

import Board from './'
import { shallow } from 'enzyme'

describe('components:Board', () => {
  it('matches the snapshot', () => {
    expect(toJson(shallow(<Board />))).toMatchSnapshot()
  })
})
