import * as React from 'react'

import Board from '../Board'
import Square from '../../containers/Square'
import styled from 'styled-components'
import { times } from 'ramda'

const NUMBER_OF_SQUARES = 9

const StyledApp = styled.div`
  display: grid;
  font-family: 'Verdana', sans-serif;
  grid-template-areas: 'board';
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
`
StyledApp.defaultName = 'StyledApp'

export default function App () {
  return (
    <StyledApp>
      <Board>
        {times(
          square => (
            <Square key={square} index={square} />
          ),
          NUMBER_OF_SQUARES
        )}
      </Board>
    </StyledApp>
  )
}
