import { PropTypes } from 'react'
import Radium from 'radium'
import styles from 'styles/js/global_styles'
import unicodeIcons from './unicode-icons.js'

export const Icon = (props) => (
  <div style={styles.size(props.size)}>
    {unicodeIcons[props.name]}
  </div>
)
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}
Icon.defaultProps = {
  name: '',
  size: 36
};


export default Radium(Icon)
