import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'chess',
  getComponent (nextState, next) {
    require.ensure([], (require) => {
      const ChessBoard = require('./containers/ChessBoardContainer').default
      const reducer = require('./modules/chessboard').default

      injectReducer(store, { key: 'chessboard', reducer })

      next(null, ChessBoard)
    }, 'chess')
  }
})
