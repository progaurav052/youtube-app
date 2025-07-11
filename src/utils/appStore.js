import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
  reducer: {
    //slice : reducer for that slice
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});
export default appStore;
