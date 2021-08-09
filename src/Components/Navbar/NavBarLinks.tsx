import {
  Box,
  Button,
  InputAdornment,
  List,
  ListItem,
  TextField,
  Typography
} from '@material-ui/core'
import { SearchRounded } from '@material-ui/icons'
import React, { MouseEvent } from 'react'

import { Link } from 'react-router-dom'
import useStyles from './Navbar.styles'

type NavLinks = {
  closeMobileMenu?: React.EventHandler<MouseEvent>
}

const NavbarLinks: React.FC<NavLinks> = ({ closeMobileMenu }) => {
  const cls = useStyles()

  return (
    <List className={cls.navbarLinks}>
      <ListItem>
        <Box className={cls.search}>
          <TextField
            InputProps={{
              fullWidth: true,
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
      </ListItem>
      <ListItem onClick={closeMobileMenu}>
        <Typography component={Link} to="/home">
          Home
        </Typography>
      </ListItem>
      <ListItem onClick={closeMobileMenu}>
        <Typography component={Link} to="/catalogue">
          Catalogue
        </Typography>
      </ListItem>
      <ListItem onClick={closeMobileMenu}>
        <Typography component={Link} to="#">
          Login
        </Typography>
      </ListItem>
      <ListItem onClick={closeMobileMenu}>
        <Button variant="contained" color="secondary" className={cls.signup}>
          Sign up
        </Button>
      </ListItem>
    </List>
  )
}

export default NavbarLinks
