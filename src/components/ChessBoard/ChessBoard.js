import React, { PropTypes } from 'react'
import Radium from 'radium'
import globalStyles from 'styles/js/global_styles'
import themeStyles from 'styles/js/theme_styles'
import Board from 'components/Board'
import { convertFenToArray, convertPgnToArray } from './chess-utils'

const BOARD_THEME = 'default'

const styles = {
  ...globalStyles,
  ...themeStyles(BOARD_THEME),
  strikethrough: {
    color: 'lightGrey',
    textDecoration: 'line-through'
  }
}

const MoveList = Radium((props) => (
  <div style={[props.style, styles.width(props.size)]}>
    {props.moves.map((move, moveIndex) => (
      <div
        key={moveIndex}
        onClick={() => props.jumpToMove(moveIndex)}
        style={[
          styles.width(props.size / 2),
          styles.highlightHover,
          props.currentMove + 1 > moveIndex ? styles.strikethrough : {}
        ]}
      >
        {move}
      </div>
    ))}
  </div>
))

const ChessBoard = (props) => {
  const pieces = convertFenToArray(props.fen)
  const moves = convertPgnToArray(props.pgn)

  return (
    <div style={[styles.width(750), styles.center]}>
      <Board pieces={pieces} size={600} style={styles.floatLeft} theme={BOARD_THEME} />
      <MoveList moves={moves} size={150} style={[styles.flexWrap, styles.floatRight]} currentMove={props.currentMove} jumpToMove={props.jumpToMove} />
    </div>
  )
}
ChessBoard.propTypes = {
  fen: PropTypes.string,
  pgn: PropTypes.string,
  currentMove: PropTypes.number
}

export default Radium(ChessBoard)
