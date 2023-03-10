import { Avatar } from "@mui/material";
import React from "react";
import "../css/Post.css";
import InputOptions from "./InputOptions";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl}></Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" />
        <InputOptions Icon={ChatOutlinedIcon} title="Comment" />
        <InputOptions Icon={ShareOutlinedIcon} title="Share" />
        <InputOptions Icon={SendOutlinedIcon} title="Send" />
      </div>
    </div>
  );
}

export default Post;
