import Chess from 'components/ChessBoard/chess'
import { convertPgnToArray } from 'components/ChessBoard/chess-utils'

// ------------------------------------
// Constants
// ------------------------------------
export const CHESSBOARD_JUMP_TO_MOVE = 'CHESSBOARD_JUMP_TO_MOVE'

// ------------------------------------
// Actions
// ------------------------------------
export function jumpToMove (value = 0) {
  return {
    type: CHESSBOARD_JUMP_TO_MOVE,
    payload: value
  }
}

export const actions = {
  jumpToMove
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CHESSBOARD_JUMP_TO_MOVE]: (state, action) => {
    const chess = new Chess()
    chess.load(state.fen)

    const allMoves = convertPgnToArray(state.pgn)
    const moves = _.dropRight(allMoves, allMoves.length - action.payload - 1)

    _.each(moves, chess.move)
    const newFen = chess.fen().split(' ')[0]

    return {
      ...state,
      fen: newFen,
      currentMove: action.payload
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const STARTING_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
const SAMPLE_PGN = '1. d4 Nf6 2. c4 e6 3. g3 d5'

const initialState = { fen: STARTING_FEN, currentMove: -10, pgn: SAMPLE_PGN }
export default function chessboardReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
