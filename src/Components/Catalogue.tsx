import { Box, Button, makeStyles } from '@material-ui/core'
import { useAppSelector } from '../app/hooks'
import { Product, productsCount } from '../features/products/productsSlice'
import ProductCard from './ProductCard'
import _ from 'lodash'
import { useState, useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
  catalogueRoot: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  catalogueContent: {
    maxWidth: 1440,
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-evenly'
  },
  paginationBar: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: 250,
    padding: '1rem 0 1rem'
  },
  btnPageSelected: {
    backgroundColor: theme.palette.primary.main
  }
}))

const productsPerPage = 4

const chunkInPages = (rawData: Product[], itemsPerPage: number) => {
  const dataRaw = Object.values(rawData)
  const chunker = _.chunk(dataRaw, itemsPerPage)
  return chunker
}

export default function Catalogue() {
  const cls = useStyles()
  const { data } = useAppSelector(productsCount)
  const [allChunks, setAllChunks] = useState<Product[][]>([])
  const [pageData, setpageData] = useState<Product[]>(allChunks[0])
  const [selectedPage, setSelectedPage] = useState<number>(0)

  useEffect(() => {
    const chunks = chunkInPages(data, productsPerPage)
    setpageData(chunks[0])
    setAllChunks(chunks)
  }, [data])

  const changePage = (event: React.MouseEvent) => {
    const page = Number(event.currentTarget.textContent) - 1
    setSelectedPage(page)
    return setpageData(allChunks[page])
  }

  return (
    <Box className={cls.catalogueRoot}>
      <Box className={cls.catalogueContent}>
        {pageData &&
          pageData.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </Box>
      <Box className={cls.paginationBar}>
        {allChunks &&
          allChunks.map((page, index) => (
            <Button
              className={selectedPage === index ? cls.btnPageSelected : ''}
              key={index}
              variant="contained"
              color="secondary"
              onClick={changePage}>
              {index + 1}
            </Button>
          ))}
      </Box>
    </Box>
  )
}
