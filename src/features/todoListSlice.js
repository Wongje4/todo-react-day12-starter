import {createSlice, current} from '@reduxjs/toolkit';

const todoListSlice = createSlice({

    name: "todoList",
    initialState:{
        todos: [{
            id: 0,
            text: "todo example",
            done: false
        }],
        currentId: 1,
    },
    reducers:{
        addTodo:  (state, action) => {

            state.todos = [...state.todos, {
                id: state.currentId,
                text: action.payload,
                done: false

            }]
            state.currentId += 1;
        },
        doneTodo: (state, action) => {
            console.log(action.payload);
            const foundTodo = state.todos.find(todo => todo.id === action.payload);
            foundTodo.done = !foundTodo.done;
            console.log(foundTodo.done);
            
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        

    },
})

export const {addTodo, doneTodo, deleteTodo} = todoListSlice.actions;
export default todoListSlice.reducer;