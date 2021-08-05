import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import productsSlice from '../features/products/productsSlice'
import questionsSlice from '../features/questions/questionsSlice'

export const store = configureStore({
  reducer: {
    products: productsSlice,
    questions: questionsSlice
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
