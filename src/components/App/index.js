import * as React from 'react'

import Board from '../Board'
import Square from '../Square'
import getPlayer from '../../utilities/getPlayer'
import { isUndefined } from 'ramda-adjunct'
import styled from 'styled-components'
import { times } from 'ramda'

const NUMBER_OF_SQUARES = 9

function makeSquares (moves) {
  return times(square => {
    const player = getPlayer(square, moves)

    return isUndefined(player) ? (
      <Square
        key={square}
        index={square}
        handleClick={() => console.log(`Square ${square}`)}
      />
    ) : (
      <Square key={square} index={square} player={player} />
    )
  }, NUMBER_OF_SQUARES)
}

const StyledApp = styled.div`
  display: grid;
  font-family: 'Verdana', sans-serif;
  grid-template-areas: 'board';
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
`
StyledApp.displayName = 'StyledApp'

export default function App ({ moves = [] }) {
  return (
    <StyledApp>
      <Board>{makeSquares(moves)}</Board>
    </StyledApp>
  )
}
