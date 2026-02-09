//reducers
import { createSlice,nanoid } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

const initialState={
    todos:[{id:"abc",task:"demo-task",isDone:false}],
};

export const todoSlice= createSlice({
    name:"todo",
    initialState,
    reducers:{//state,action
        addTodo:(state,action)=>{
            const newTodo={
                id:nanoid(),
                task:action.payload,
                isDone:false,
            };
            state.todos.push(newTodo);//direct mutation unlike react normal 
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!=action.payload);
        },
        markAsDone:(state,action)=>{
            state.todos.map((todo)=>{
                if(todo.id===action.payload){
                    todo.isDone=true;
                }
            });
        }
    }
})


export default todoSlice.reducer;
export const {addTodo,deleteTodo,markAsDone}=todoSlice.actions;