import { PropTypes } from 'react'
import Radium from 'radium'
import globalStyles from 'styles/js/global_styles'
import themeStyles from 'styles/js/theme_styles'
import Piece from 'components/Piece'

const TILE_SIZE = 80
const PIECE_SIZE = TILE_SIZE * (7 / 11)

const Tile = Radium((props) => {
  const _styles = {
    ...props.styles,
    tile: {
      height: TILE_SIZE,
      width: TILE_SIZE
    }
  }

  const _tileColor = (props.row + props.column) % 2 === 0
    ? _styles.blackBackground
    : _styles.whiteBackground

  return (
    <div style={[ _styles.tile, _styles.darkBorder, _tileColor ]}>
      {props.children}
    </div>
  )
})

export const Board = (props) => {
  const _styles = {
    ...globalStyles,
    ...themeStyles(props.theme)
  }

  const _renderCol = (piece, column, row) => (
    <Tile key={column} row={row} column={column} styles={_styles}>
      <Piece name={piece.name} size={PIECE_SIZE} style={_styles[`${piece.color}Fill`]} />
    </Tile>
  )

  const _renderRow = (pieces, row) => (
    <section style={_styles.flexbox} key={row}>
      {pieces.map((piece, column) => _renderCol(piece, column, row))}
    </section>
  )

  return (
    <div style={[_styles.width(props.size), props.style]}>
      {props.pieces.map(_renderRow)}
    </div>
  )
}
Board.propTypes = {
  size: PropTypes.number.isRequired,
  theme: PropTypes.string.isRequired,
  style: PropTypes.object,
  pieces: PropTypes.array
}
Board.defaultProps = {
  size: 600,
  theme: 'default'
}

export default Radium(Board)
