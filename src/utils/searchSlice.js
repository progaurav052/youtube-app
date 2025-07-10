import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "search",
  initialState: {
    cacheMap: {}, // initailly an empty cache
  },
  reducers: {
    /*{
                           action:{
                                     payload:datapassed// might be object or array or anyting 
                                 }
                         }*/
    addToCache: (state, action) => {
      state.cacheMap = Object.assign(state.cacheMap, action.payload); // we are mutating the state
    },
  },
});
export const { addToCache } = searchSlice.actions; // actions is an object of all actions
export default searchSlice.reducer;
