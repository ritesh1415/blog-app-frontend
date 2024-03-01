import {createSlice,configureStore} from "@reduxjs/toolkit";
const authSlice=createSlice({
    name:"auth",
    initialState:{
        isLogin:false,
    },
    reducers:{
        login(state){
            state.isLogin=true;
        },
        logout(state){
            state.isLogin=false;
        }
    }
})
export const authActions=authSlice.actions;
export const Store=configureStore({
    reducer:authSlice.reducer,
})