import React from "react";
import Comment from "./Comment";

const CommentList = (props) => {
  const { comments } = props;
  return (
    <div className="px-2 my-4 ml-2 border-l-2">
      {" "}
      {comments.map((comment, index) => {
        return <Comment key={index} comment={comment} />;
      })}
    </div>
  );
};

export default CommentList;
