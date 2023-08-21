import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList: []
}

export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
        state.todoList = [...state.todoList, action.payload ]
    }
    
   
  }
})

// Action creators are generated for each case reducer function
export const {addTodo  } = TodoSlice.actions

export default TodoSlice.reducer