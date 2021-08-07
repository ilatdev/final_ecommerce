import {
  Toolbar,
  AppBar,
  Typography,
  Container,
  Box,
  Button,
  TextField,
  InputAdornment
} from '@material-ui/core'
import Logo from './Logo.svg'
import { Link } from 'react-router-dom'
import useStyles from './Navbar.styles'
import { SearchRounded } from '@material-ui/icons'

export default function Navbar() {
  const cls = useStyles()

  return (
    <AppBar position="fixed" variant="outlined" className={cls.appBar}>
      <Container>
        <Toolbar disableGutters className={cls.toolBar}>
          <Box className={cls.brand}>
            <Box>
              <img src={Logo} width="50px" alt="brand_logo" />
            </Box>
            <Typography variant="h6" component={Link} to="/">
              Shop.com
            </Typography>
          </Box>

          <Box className={cls.search}>
            <TextField
              margin="dense"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRounded />
                  </InputAdornment>
                )
              }}
              fullWidth
              placeholder="Products and Categories"
            />
          </Box>
          <Box className={cls.navigation}>
            <Typography component={Link} to="/home">
              Home
            </Typography>
            <Typography component={Link} to="/catalogue">
              Catalogue
            </Typography>
            <Typography component={Link} to="#">
              Log in
            </Typography>
            <Button id="signup" variant="contained">
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
