import React from "react";
import CommentList from "./CommentList";
const Comment = (props) => {
  const { comment } = props;
  return (
    <div>
      <div className="flex my-4 p-2 bg-gray-100 rounded-lg">
        <div>
          <img
            className="h-8"
            src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
            alt=""
          />
        </div>
        <div>
          <ul>
            <li className="font-bold">{comment.userName}</li>
            <li>{comment.text}</li>
          </ul>
        </div>
      </div>
      <div>
        <CommentList comments={comment.replies}/>
      </div>
    </div>
  );
};

export default Comment;
