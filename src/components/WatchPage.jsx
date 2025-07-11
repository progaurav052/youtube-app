/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
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
  const dispatch = useDispatch();
  const chatMessages=useSelector((store)=>store.chat.messages)
  useEffect(() => {
    dispatch(collapseMenu());

    const interval = setInterval(() => {
      console.log("API-POLLING");
      dispatch(addMessage({
        username: generateName(),
        usermessage:  generateString(10)+ "⭐️",
      }));
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
        <div className="p-2 m-4 mr-4 border border-gray-400 w-full h-[500px]  rounded-lg items-center overflow-y-scroll flex-reverse">
          <h1 className="bg-blue-100 font-bold border-white rounded-lg p-3 ">
            Livechat
          </h1>
          {chatMessages.map((chatmessage,index)=>{
            return(<ChatMessage key={index} message={chatmessage}/>);
          })}
        </div>
      </div>
      <div className="p-2 m-2 w-[1/2]">
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
