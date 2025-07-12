/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collapseMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import ChatMessage from "./ChatMessage";
import generateName from "../utils/getRandomName";
import generateString from "../utils/getRandomString";
import { addMessage } from "../utils/chatSlice";
const WatchPage = () => {
  const [searchParam] = useSearchParams(); // for getting search/query params
  const [liveChatText, setLiveChatText] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    console.log("Component Rendered");
    dispatch(collapseMenu());

    const interval = setInterval(() => {
      console.log("API-POLLING");
      dispatch(
        addMessage({
          username: generateName(),
          usermessage: generateString(10) + "⭐️",
        })
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  console.log(searchParam.get("v"));
  return (
    // we want the side bar to renderable , but when the component loads it should be collapsed

    <div className="w-full">
      <div className="flex w-full">
        <div className="p-2 m-2">
          <iframe
            className="rounded-lg"
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full mt-4 mr-4">
          <h1 className="bg-blue-100 w-full items-center font-bold border-white rounded-t-lg p-3 ">
            Livechat
          </h1>

          <div className="p-2  mr-4 border border-gray-400 w-full h-[450px] rounded-b-lg overflow-y-scroll flex flex-col-reverse">
            {chatMessages.map((chatmessage, index) => (
              <ChatMessage key={index} message={chatmessage} />
            ))}
          </div>
          <div className="mt-2 ml-20">
            <input
              type="text"
              className="p-2 rounded-l-lg border border-gray-400"
              placeholder="Your message"
              value={liveChatText}
              onChange={(e) => {
                setLiveChatText(e.target.value);
              }}
            />
            <button
              className="bg-green-200  rounded-r-lg p-2"
              onClick={() => {
                dispatch(
                  addMessage({
                    username: "Akshay",
                    usermessage:liveChatText,
                  })
                );
                setLiveChatText("");
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="p-2 m-2 w-[1/2]">
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
