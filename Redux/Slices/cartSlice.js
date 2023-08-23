import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList: []
}

export const CartSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    
   
  }
})

// Action creators are generated for each case reducer function
export const { } = CartSlice.actions

export default CartSlice.reducer