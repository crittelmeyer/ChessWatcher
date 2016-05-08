import React, { PropTypes } from 'react'
import Icon from 'components/Icon'

export const Piece = (props) => (
  <Icon name={props.name} size={props.size} style={props.style} />
)
Piece.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  style: PropTypes.object
};
Piece.defaultProps = {
  name: '',
  size: 36
};

export default Piece
