import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  footer: {
    height: 150,
    padding: '0 20px'
  },
  content: {
    minHeight: '100%',
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '25px 25px 0 0'
  },
  copyRight: {
    color: theme.palette.text.secondary,
    fontWeight: 500
  }
}))

export default function Footer() {
  const cls = useStyles()
  const getYear = new Date()
  return (
    <Box className={cls.footer}>
      <Box className={cls.content}>
        <Typography className={cls.copyRight} variant="caption">
          Copyright © Shop.com {getYear.getFullYear()}. All right reserved.
        </Typography>
      </Box>
    </Box>
  )
}
