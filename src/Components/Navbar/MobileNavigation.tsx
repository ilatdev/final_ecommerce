import { Box, IconButton } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import NavbarLinks from './NavBarLinks'
import useStyles from './Navbar.styles'
import { MouseEvent, useState } from 'react'

const MobileNavigation = () => {
  const cls = useStyles()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleDropDownMenu = (event: MouseEvent) => {
    event.preventDefault()
    return setMenuOpen(!menuOpen)
  }

  return (
    <Box className={cls.mobileNavigation}>
      {menuOpen && <NavbarLinks closeMobileMenu={handleDropDownMenu} />}
      <IconButton id="menu" aria-label="menu" onClick={handleDropDownMenu}>
        <Menu />
      </IconButton>
    </Box>
  )
}

export default MobileNavigation
