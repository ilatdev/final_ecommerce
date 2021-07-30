import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { getProducts } from './productsAPI'

export const fetchProducts = createAsyncThunk(
  'products/getProducts',
  getProducts
)

export interface Offer {
  expires_at: string
  price: number
}

export interface Product {
  currency: string
  id: number
  images: string[]
  offer?: Offer
  price: string
  title: string
}

export interface ProductsState {
  data: Product[]
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: ProductsState = {
  data: [],
  status: 'idle'
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = 'pending'
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = { ...action.payload }
      state.status = 'succeeded'
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'failed'
    })
  }
})

export const productsCount = (state: RootState) => state.products

export default productSlice.reducer
