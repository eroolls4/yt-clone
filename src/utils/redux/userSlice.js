import {createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addUser: (state, action) => {
           return action.payload; //make initialstate to action.payload
        },
        removeUser: (state, action) => {
             return null;  //make initial state null
        },

    }
})

export  const {addUser,removeUser} =userSlice.actions;

export default userSlice.reducer;