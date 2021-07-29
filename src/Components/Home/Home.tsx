import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Box, Container, Paper } from '@material-ui/core'
import {
  fetchProducts,
  productsCount
} from '../../features/products/productsSlice'
import Banner from './banner1.jpg'

export default function Home() {
  const dispatch = useAppDispatch()
  const products = useAppSelector(productsCount)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <Container>
      <Box m={3}>
        <Box>
          <img src={Banner} width="100%" alt="banner_home" />
        </Box>
        <Paper>
          <Box p={1}>
            <p>{JSON.stringify(products)}</p>
          </Box>
        </Paper>
      </Box>
    </Container>
  )
}
