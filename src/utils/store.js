import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice"
import userSlice from "./userSlice";

const store=configureStore({
     reducer : {
         app : appSlice,
         user : userSlice,
         search : searchSlice
     },
})


export  default  store;