import { Box } from '@material-ui/core'
import image1 from './banner1.jpg'

export default function Banner() {
  return (
    <div>
      <Box>
        <img src={image1} width="100%" alt="banner_home" />
      </Box>
    </div>
  )
}
