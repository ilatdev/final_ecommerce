import { createTheme } from '@material-ui/core'

const theme = createTheme({
  typography: {
    allVariants: {
      color: '#252525'
    },
    fontFamily: [
      'Mulish',
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          textDecoration: 'none'
        }
      }
    }
  }
})

export default theme
