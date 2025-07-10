import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";

const appStore=configureStore({
    reducer:{
        app:appSlice,
        //slice : reducer for that slice 
        search:searchSlice
    }
});
export default appStore;