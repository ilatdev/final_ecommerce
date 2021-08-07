import Navbar from './Navbar'
import Footer from './Footer'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  coreLayout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginTop: 90,
    flexGrow: 1
  }
}))

const CoreLayout: React.FC = ({ children }) => {
  const cls = useStyles()
  return (
    <Box className={cls.coreLayout}>
      <Navbar />
      <Box className={cls.main}>{children}</Box>
      <Footer />
    </Box>
  )
}

export default CoreLayout
