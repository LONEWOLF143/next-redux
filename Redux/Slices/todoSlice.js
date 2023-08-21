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
    },
    deleteTodo: (state, action) => {
        state.todoList = state.todoList.filter(
            todo => todo.id !== action.payload.id
        )
    }
    
   
  }
})

// Action creators are generated for each case reducer function
export const {addTodo, deleteTodo  } = TodoSlice.actions

export default TodoSlice.reducer