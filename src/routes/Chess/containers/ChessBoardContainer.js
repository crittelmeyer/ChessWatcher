import { connect } from 'react-redux'
import { jumpToMove } from '../modules/chessboard'

import ChessBoard from 'components/ChessBoard'

const mapActionCreators = {
  jumpToMove
}

const mapStateToProps = (state) => ({
  fen: state.chessboard.fen,
  currentMove: state.chessboard.currentMove,
  pgn: state.chessboard.pgn
})

export default connect(mapStateToProps, mapActionCreators)(ChessBoard)
