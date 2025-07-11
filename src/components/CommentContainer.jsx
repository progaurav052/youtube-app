import React from "react";
import CommentList from "./CommentList";

const comments = [
  {
    userName: "Gaurav Pai",
    text: "Hi I am gaurav pai and i am SE",
    replies: [
      {
        userName: "Gaurav Pai",
        text: "Hi I am gaurav pai and i am SE",
        replies: [
          {
            userName: "Gaurav Pai",
            text: "Hi I am gaurav pai and i am SE",
            replies: [
              {
                userName: "Gaurav Pai",
                text: "Hi I am gaurav pai and i am SE",
                replies: [
                  {
                    userName: "Gaurav Pai",
                    text: "Hi I am gaurav pai and i am SE",
                    replies: [
                      {
                        userName: "Gaurav Pai",
                        text: "Hi I am gaurav pai and i am SE",
                        replies: [],
                      },
                    ],
                  },
                  {
                    userName: "Gaurav Pai",
                    text: "Hi I am gaurav pai and i am SE",
                    replies: [],
                  },
                  {
                    userName: "Gaurav Pai",
                    text: "Hi I am gaurav pai and i am SE",
                    replies: [],
                  },
                ],
              },
              {
                userName: "Gaurav Pai",
                text: "Hi I am gaurav pai and i am SE",
                replies: [
                  {
                    userName: "Gaurav Pai",
                    text: "Hi I am gaurav pai and i am SE",
                    replies: [
                      {
                        userName: "Gaurav Pai",
                        text: "Hi I am gaurav pai and i am SE",
                        replies: [],
                      },
                    ],
                  },
                  {
                    userName: "Gaurav Pai",
                    text: "Hi I am gaurav pai and i am SE",
                    replies: [],
                  },
                  {
                    userName: "Gaurav Pai",
                    text: "Hi I am gaurav pai and i am SE",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        userName: "Gaurav Pai",
        text: "Hi I am gaurav pai and i am SE",
        replies: [],
      },
      {
        userName: "Gaurav Pai",
        text: "Hi I am gaurav pai and i am SE",
        replies: [],
      },
    ], // this is again an comment itself
  },
  {
    userName: "Gaurav Pai",
    text: "Hi I am gaurav pai and i am SE",
    replies: [
      {
        userName: "Gaurav Pai",
        text: "Hi I am gaurav pai and i am SE",
        replies: [
          {
            userName: "Gaurav Pai",
            text: "Hi I am gaurav pai and i am SE",
            replies: [],
          },
        ],
      },
      {
        userName: "Gaurav Pai",
        text: "Hi I am gaurav pai and i am SE",
        replies: [
          {
            userName: "Gaurav Pai",
            text: "Hi I am gaurav pai and i am SE",
            replies: [
              {
                userName: "Gaurav Pai",
                text: "Hi I am gaurav pai and i am SE",
                replies: [
                  {
                    userName: "Gaurav Pai",
                    text: "Hi I am gaurav pai and i am SE",
                    replies: [],
                  },
                ],
              },
              {
                userName: "Gaurav Pai",
                text: "Hi I am gaurav pai and i am SE",
                replies: [],
              },
              {
                userName: "Gaurav Pai",
                text: "Hi I am gaurav pai and i am SE",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        userName: "Gaurav Pai",
        text: "Hi I am gaurav pai and i am SE",
        replies: [
          {
            userName: "Gaurav Pai",
            text: "Hi I am gaurav pai and i am SE",
            replies: [
              {
                userName: "Gaurav Pai",
                text: "Hi I am gaurav pai and i am SE",
                replies: [
                  {
                    userName: "Gaurav Pai",
                    text: "Hi I am gaurav pai and i am SE",
                    replies: [],
                  },
                ],
              },
              {
                userName: "Gaurav Pai",
                text: "Hi I am gaurav pai and i am SE",
                replies: [],
              },
              {
                userName: "Gaurav Pai",
                text: "Hi I am gaurav pai and i am SE",
                replies: [],
              },
            ],
          },
          {
            userName: "Gaurav Pai",
            text: "Hi I am gaurav pai and i am SE",
            replies: [
              {
                userName: "Gaurav Pai",
                text: "Hi I am gaurav pai and i am SE",
                replies: [
                  {
                    userName: "Gaurav Pai",
                    text: "Hi I am gaurav pai and i am SE",
                    replies: [],
                  },
                ],
              },
              {
                userName: "Gaurav Pai",
                text: "Hi I am gaurav pai and i am SE",
                replies: [],
              },
              {
                userName: "Gaurav Pai",
                text: "Hi I am gaurav pai and i am SE",
                replies: [
                  {
                    userName: "Gaurav Pai",
                    text: "Hi I am gaurav pai and i am SE",
                    replies: [
                      {
                        userName: "Gaurav Pai",
                        text: "Hi I am gaurav pai and i am SE",
                        replies: [
                          {
                            userName: "Gaurav Pai",
                            text: "Hi I am gaurav pai and i am SE",
                            replies: [],
                          },
                        ],
                      },
                      {
                        userName: "Gaurav Pai",
                        text: "Hi I am gaurav pai and i am SE",
                        replies: [],
                      },
                      {
                        userName: "Gaurav Pai",
                        text: "Hi I am gaurav pai and i am SE",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]; // hardCoded for now , every comment is object
const CommentContainer = () => {
  return (
    <div className="mt-4">
       <h1 className="font-bold text-2xl">Comments :</h1> 
       <CommentList comments={comments}/>
    </div>
  );
};

export default CommentContainer;
