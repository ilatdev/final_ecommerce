import { createTheme } from '@material-ui/core'

const theme = createTheme({
  shape: {
    borderRadius: 25
  },
  palette: {
    primary: {
      main: '#F7B801',
      dark: '#F18701'
    },
    secondary: {
      main: '#5D5FEA',
      dark: '#3D348B'
    },
    text: {
      secondary: '#f0f0f0'
    }
  },
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
