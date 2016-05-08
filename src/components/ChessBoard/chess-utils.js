import pieceMap from './piece-map'
import { flow, split, map, join, fill, reverse } from 'lodash/fp'

const PGN_REGEX =
  '(?:' +
    '[PNBRQK]?' +
    '[a-h]?[1-8]?' +
    'x?' +
    '[a-h][1-8]' +
    '(?:\=[PNBRQK])?' +
    '|O(-?O){1,2}' +
  ')' +
  '[\+#]?' +
  '(\s*[\!\?]+)?'

  /*
   * Converts a PGN string to an array of moves
   */
export function convertPgnToArray (pgn) {
  return pgn.match(new RegExp(PGN_REGEX, 'g'))
}

/*
 * Accepts a char parameter and:
 *   if a number, returns a string of '*' equal in length to the number
 *   otherwise, returns it unchanged
 */
function _expandPlaceholders (char) {
  // isFinite acts as "isNumeric" for our purposes
  return isFinite(char)
    ? flow(
        fill(0)(parseInt(char))('*'),
        join('')
      )(Array(parseInt(char)))
    : char
}

/*
 * Accepts a string of characters and produces an array of objects derived from pieceMap
 */
function _createPieceObjects (row) {
  return flow(
    split(''),
    map(x => pieceMap[x])
  )(row)
}

/*
 * Converts a FEN string to a nested array of piece objects
 */
export function convertFenToArray (fen) {
  return flow(
    split(''),
    map(_expandPlaceholders),
    join(''),
    split('/'),
    reverse,
    map(_createPieceObjects)
  )(fen)
}
