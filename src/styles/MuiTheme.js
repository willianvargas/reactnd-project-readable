import { createMuiTheme } from '@material-ui/core/styles'


export default createMuiTheme({
  palette: {
    background: {
      default: '#fff'
    },
    primary: {
      light: '#2196f3',
      main: '#1565c0',
      dark: '#0d47a1',
      contrastText: '#fff'
    }
  },
  typography: {
    useNextVariants: true,
    h1: {
      fontFamily: '"Titillium Web", "Helvetica", "Arial", sans-serif',
      fontWeight: 400
    },
    h2: {
      fontFamily: '"Titillium Web", "Helvetica", "Arial", sans-serif',
      fontWeight: 600
    },
    h3: {
      fontFamily: '"Titillium Web", "Helvetica", "Arial", sans-serif',
      fontWeight: 600
    },
    h4: {
      fontFamily: '"Titillium Web", "Helvetica", "Arial", sans-serif',
      fontWeight: 600
    },
    button: {
      fontFamily: '"Titillium Web", "Helvetica", "Arial", sans-serif',
      fontWeight: 600
    }
  }
})
