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
    },
    updateTodo: (state, action) => {
        state.todoList = state.todoList.map(todo => {
            if(todo.id === action.payload.id) {
                return {
                    ...todo,
                    id: action.payload.id,
                    text: action.payload.text,
                    time: new Date(),
                    completed: action.payload.completed
                };
            } else {
                return {
                    ...todo
                }
            }
        })
    },
    isCompleted: (state, action) => {
        return {
            ...state,
            todoList: state.todoList.map(todo => {
                if(todo.id === action.payload.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                } else {
                    return {
                        ...todo,
                    }
                }
            })
        }
    }
    
   
  }
})

// Action creators are generated for each case reducer function
export const {addTodo, deleteTodo, updateTodo, isCompleted  } = TodoSlice.actions

export default TodoSlice.reducer