import * as React from 'react'

import Board from '../Board'
import Square from '../Square'
import styled from 'styled-components'
import { times } from 'ramda'

const NUMBER_OF_SQUARES = 9

const makeSquares = () =>
  times(
    idx => <Square key={idx} index={idx} player={idx % 2 === 0 ? 'x' : 'o'} />,
    NUMBER_OF_SQUARES
  )

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

export default function App () {
  return (
    <StyledApp>
      <Board>{makeSquares()}</Board>
    </StyledApp>
  )
}
