import {
  Box,
  Container,
  IconButton,
  makeStyles,
  Paper
} from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import image1 from './banner1.jpg'
import image2 from './banner2.jpg'
import image3 from './banner3.jpg'
import { useState } from 'react'
import { useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  banner: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '25px',
    '& img': {
      borderRadius: '25px'
    }
  },
  next: {
    position: 'absolute',
    right: 0,
    marginRight: 5,
    zIndex: 1,
    opacity: 0.5
  },
  back: {
    position: 'absolute',
    left: 0,
    marginLeft: '1rem',
    zIndex: 1,
    opacity: 0.5
  }
}))

const Banner: React.FC = () => {
  const cls = useStyles()
  const source = [image1, image2, image3]
  const [bannerIndex, setBannerIndex] = useState<number>(0)

  useEffect(() => {
    let autoPlay = setTimeout(bannerToRight, 4000)

    return () => clearTimeout(autoPlay)
  })

  const bannerToRight = () =>
    bannerIndex + 1 < source.length
      ? setBannerIndex(bannerIndex + 1)
      : setBannerIndex(0)

  const bannerToLeft = () =>
    bannerIndex - 1 >= 0
      ? setBannerIndex(bannerIndex - 1)
      : setBannerIndex(source.length - 1)

  return (
    <Container className={cls.root}>
      <Paper elevation={2} className={cls.banner}>
        <img src={source[bannerIndex]} width="100%" alt="banner_home" />
        <Box className={cls.next}>
          <label htmlFor="icon-button-right">
            <IconButton
              aria-label="banner-to-right"
              component="span"
              onClick={bannerToRight}>
              <ArrowForwardIosIcon fontSize="large" />
            </IconButton>
          </label>
        </Box>
        <Box className={cls.back}>
          <label htmlFor="icon-button-left">
            <IconButton
              aria-label="banner-to-left"
              component="span"
              onClick={bannerToLeft}>
              <ArrowBackIosIcon fontSize="large" />
            </IconButton>
          </label>
        </Box>
      </Paper>
    </Container>
  )
}

export default Banner
