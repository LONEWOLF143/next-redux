import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './Slices/CounterSlice'
import TodoReducer from './Slices/TodoSlice'

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    todo: TodoReducer
  },
})