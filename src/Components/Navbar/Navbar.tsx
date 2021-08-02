import { Toolbar, AppBar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Logo from './logo.png'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    color: '#fff',
    marginInline: '5px'
  }
}))

export default function Navbar() {
  const cls = useStyles()
  return (
    <div className={cls.root}>
      <AppBar position="static" variant="outlined">
        <Toolbar>
          <img src={Logo} width="50px" alt="brand_logo" />
          <Typography
            component={Link}
            to="/home"
            variant="h6"
            className={cls.title}>
            Home
          </Typography>
          <Typography
            component={Link}
            to="/catalogue"
            variant="h6"
            className={cls.title}>
            Catalogo
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
