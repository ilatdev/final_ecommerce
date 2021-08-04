import { Box, CircularProgress, makeStyles } from '@material-ui/core'
import React from 'react'
import { useAppSelector } from '../app/hooks'
import { productsCount } from '../features/products/productsSlice'
import { questionCount } from '../features/questions/questionsSlice'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999
  },
  hide: {
    display: 'none'
  }
}))

export const LoadingCircle: React.FC = ({ children }) => {
  const cls = useStyles()
  const ProductStatus = useAppSelector(productsCount).status
  const QuestionState = useAppSelector(questionCount).status

  return (
    <Box
      className={
        ProductStatus === 'pending' || QuestionState === 'pending'
          ? cls.root
          : cls.hide
      }>
      <CircularProgress disableShrink size={150} />
    </Box>
  )
}
