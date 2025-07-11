import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [], // [{},{},{}] , each {} will have name of user and text-message
  },
  reducers: {
    addMessage: (state, action) => {
      
      state.messages.splice(20,1)
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
