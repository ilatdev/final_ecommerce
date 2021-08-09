import { Toolbar, AppBar, Typography, Container, Box } from '@material-ui/core'
import Logo from './Logo.svg'
import { Link } from 'react-router-dom'
import useStyles from './Navbar.styles'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

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
          <Navigation />
          <MobileNavigation />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
