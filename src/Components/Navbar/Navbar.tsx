import * as React from 'react'
import { Toolbar, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Logo from './logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    color: '#fff',
    marginRight: '1rem'
  }
}))

export default function Navbar() {
  const cls = useStyles()
  return (
    <div className={cls.root}>
      <AppBar position="static" variant="outlined">
        <Toolbar>
          <img src={Logo} width="50px" alt="brand_logo" />
        </Toolbar>
      </AppBar>
    </div>
  )
}
