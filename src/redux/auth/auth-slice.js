import {createSlice} from '@reduxjs/toolkit';
import {authOperations} from './auth-operations';


const initialState = {
    user: {name: null, email: null, passwrod: null},
    token: null,
    isLoggedIn:false,
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    extraReducers:{
        [authOperations.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token 
            state.isLoggedIn = true;

        },
        [authOperations.logIn.fulfilled](state, action){
            state.user = action.payload.user;
            state.token = action.payload.token
            state.isLoggedIn = true;
        },
        [authOperations.logOut.fulfilled](state){
            state.user = {name: null, email:null}
            state.token = null
            state.isLoggedIn = false;
        },
        [authOperations.fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
          },
    },
});

