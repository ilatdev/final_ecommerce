import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

interface ImageSource {
  images: string[]
}

const ProductGallery: React.FC<ImageSource> = ({ images }) => {
  const source = images.map((img, number) => ({
    original: `${img}?id=${number}`,
    thumbnail: `${img}?id=${number}`
  }))

  return <ImageGallery items={source} showPlayButton={false} lazyLoad={true} />
}

export default ProductGallery
