import React from "react";

const commentData = [
  {
    name: "Armaan",
    text: "lorem jnerj neefkj nvabkj ",
    replies: [
      {
        name: "Armaan",
        text: "lorem jnerj neefkj nvabkj ",
        replies: [],
      },
      {
        name: "Armaan",
        text: "lorem jnerj neefkj nvabkj ",
        replies: [
            {
                name: "Armaan",
                text: "lorem jnerj neefkj nvabkj ",
                replies: [{
                    name: "Armaan",
                    text: "lorem jnerj neefkj nvabkj ",
                    replies: [],
                  },],
              },
        ],
      },
      {
        name: "Armaan",
        text: "lorem jnerj neefkj nvabkj ",
        replies: [],
      },
    ],
  },
  {
    name: "Armaan",
    text: "lorem jnerj neefkj nvabkj ",
    replies: [],
  },
  {
    name: "Armaan",
    text: "lorem jnerj neefkj nvabkj ",
    replies: [],
  },
  {
    name: "Armaan",
    text: "lorem jnerj neefkj nvabkj ",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex rounded-lg shadow-lg bg-gray-100 my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
      />
      <div className="px-2">
        <p className="font-bold">{name} </p>
        <p className="">{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="ml-5 border border-l-black">
      <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments: </h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
