import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice"
import userSlice from "./userSlice";
import chatSlice from "./chatSlice";

const store=configureStore({
     reducer : {
         app : appSlice,
         user : userSlice,
         search : searchSlice,
         chat : chatSlice,
     },
})


export  default  store;