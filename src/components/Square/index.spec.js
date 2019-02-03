import * as React from 'react'

import Square from './'
import { shallow } from 'enzyme'

describe('components:Square', () => {
  it('matches the snapshot for player O in the top left square', () => {
    expect(
      toJson(
        shallow(<Square player='o' index={0} />)
          .first()
          .render()
      )
    ).toMatchSnapshot()
  })

  it('matches the snapshot for player X in the top left square', () => {
    expect(
      toJson(
        shallow(<Square player='x' index={0} />)
          .first()
          .render()
      )
    ).toMatchSnapshot()
  })

  it('matches the snapshot for player O in the top right square', () => {
    expect(
      toJson(
        shallow(<Square player='o' index={2} />)
          .first()
          .render()
      )
    ).toMatchSnapshot()
  })

  it('matches the snapshot for player X in the bottom left square', () => {
    expect(
      toJson(
        shallow(<Square player='x' index={6} />)
          .first()
          .render()
      )
    ).toMatchSnapshot()
  })

  it('matches the snapshot for player O in the bottom right square', () => {
    expect(
      toJson(
        shallow(<Square player='o' index={8} />)
          .first()
          .render()
      )
    ).toMatchSnapshot()
  })
})
