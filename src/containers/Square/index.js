import Square from '../../components/Square'
import { connect } from 'react-redux'
import { getMoves } from '../../state/selectors'
import getPlayer from '../../utilities/getPlayer'
import { squareClicked } from '../../state/actions'

function mapStateToProps (state, { index }) {
  const moves = getMoves(state)

  return {
    player: getPlayer(index, moves)
  }
}

function mapDispatchToProps (dispatch, { index }) {
  return {
    handleClick: () => dispatch(squareClicked(index))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Square)
