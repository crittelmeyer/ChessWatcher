import defaultTheme from 'styles/js/themes/default'

export default function (theme) {
  switch (theme) {
    case 'default':
      return defaultTheme
    default:
      return {}
  }
}
