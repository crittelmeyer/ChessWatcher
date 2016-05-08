export default {
  center: {
    margin: '0 auto'
  },
  flexWrap: {
    display: 'flex',
    flexFlow: 'wrap'
  },
  flexbox: {
    display: 'flex'
  },
  floatLeft: {
    float: 'left'
  },
  floatRight: {
    float: 'right'
  },

  // utility functions
  size: (num) => {
    return { fontSize: num }
  },
  width: (num) => {
    return { width: num }
  }
}
