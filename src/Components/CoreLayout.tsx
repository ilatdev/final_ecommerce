import Navbar from './Navbar'
import Footer from './Footer'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }
}))

const CoreLayout: React.FC = ({ children }) => {
  const cls = useStyles()
  return (
    <Box className={cls.root}>
      <Navbar />
      {children}
      <Footer />
    </Box>
  )
}

export default CoreLayout
