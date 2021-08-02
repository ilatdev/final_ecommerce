import { Box, CircularProgress, makeStyles } from '@material-ui/core'
import React from 'react'
import { useAppSelector } from '../app/hooks'
import { productsCount } from '../features/products/productsSlice'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export const LoadingCircle: React.FC = ({ children }) => {
  const cls = useStyles()
  const { status } = useAppSelector(productsCount)

  if (status === 'pending') {
    return (
      <Box className={cls.root}>
        <CircularProgress disableShrink size={150} />
      </Box>
    )
  }

  return <>{children}</>
}
