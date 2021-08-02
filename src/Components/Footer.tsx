import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 150,
    padding: theme.spacing(2),
    textAlign: 'center',
    borderTop: '1px solid #3333',
    backgroundColor: '#fafafa'
  }
}))

export default function Footer() {
  const cls = useStyles()
  const getYear = new Date()
  return (
    <Box className={cls.root}>
      <Typography variant="body2">
        Copyright © Final e-commerce {getYear.getFullYear()}. All right
        reserved.
      </Typography>
    </Box>
  )
}
