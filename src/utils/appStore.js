import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const appStore=configureStore({
    reducer:{
        app:appSlice,
        //slice : reducer for that slice 
    }
});
export default appStore;