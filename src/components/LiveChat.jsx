import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const [liveChatText, setLiveChatText] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="mt-2 w-full">
      <input
        type="text"
        className="p-2 rounded-l-lg border border-gray-400 w-96"
        placeholder="Your message"
        value={liveChatText}
        onChange={(e) => {
          setLiveChatText(e.target.value);
        }}
      />
      <button
        className="bg-green-200  rounded-r-lg p-2 border border-gray-400"
        onClick={() => {
          dispatch(
            addMessage({
              username: "Gaurav Pai",
              usermessage: liveChatText,
            })
          );
          setLiveChatText("");
        }}
      >
        {" "}
        Send
      </button>
    </div>
  );
};

export default LiveChat;
