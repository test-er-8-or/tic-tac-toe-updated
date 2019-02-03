import { SQUARE_CLICKED } from '../constants'
import { squareClicked } from './'

describe('state:actions', () => {
  describe('squareClicked', () => {
    it('produces the correct action for clicking a Square', () => {
      const square = 4

      expect(squareClicked(square)).toMatchObject({
        type: SQUARE_CLICKED,
        payload: {
          square
        }
      })
    })
  })
})
