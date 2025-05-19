import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
    name:"user",
    initialState:null,

    reducers:{
        addUser:(state,action)=>{
            return action.payload;
        },
        removeUser:(state)=>{
           return null ;
        }
    }

})
export const {addUser,removeUser}=UserSlice.actions;
export default UserSlice.reducer;