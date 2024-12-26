import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todos',
    initialState:{allTodos:[{_id:1 , title : "some Title" , description : "some Description"}],
    edit : {todo: {}, isEdit: false}},
    reducers:{

        //add 

        addTodo:(state, action)=>{
            return{
                ...state,
                allTodos:[action.payload , ...state.allTodos]
            }
        },

        //remove

         removeTodo :(state,action)=>{
            return{
                ...state,
                allTodos : state.allTodos.filter((todo)=>todo._id!==action.payload),
            }
         },

         //edit
          
         editTodo :(state,action)=>{
            return{
                ...state,
                edit: {todo:action.payload , isEdit:true}
            }
         },

         //update 

         updateTodo : (state, action)=>{
            return{
                ...state,
                allTodos : state.allTodos.map((todo)=>todo._id===action.payload._id ?
                action.payload : todo), edit : {todo:{}, isEdit:false}
            }
         }
    },
})

export const {addTodo,removeTodo,editTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer;