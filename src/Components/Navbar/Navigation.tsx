import { Box } from '@material-ui/core'
import useStyles from './Navbar.styles'
import NavbarLinks from './NavBarLinks'

const Navigation = () => {
  const cls = useStyles()
  return (
    <Box className={cls.navigation}>
      <NavbarLinks />
    </Box>
  )
}

export default Navigation
