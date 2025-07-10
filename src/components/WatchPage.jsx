import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { collapseMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
const WatchPage = () => {
  const [searchParam] = useSearchParams(); // for getting search/query params
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(collapseMenu());
  }, []);
  console.log(searchParam.get("v"));
  return (
    // we want the side bar to renderable , but when the component loads it should be collapsed
    <div className="p-2 m-2">
      <iframe
        className="rounded-lg"
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParam.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
