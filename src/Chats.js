import { Avatar } from "@material-ui/core";
import { ChatBubble, Search } from "@material-ui/icons";
import React from "react";
import "./Chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <div className="chatsHeader">
        <Avatar className="chatsAvatar" />
        <div className="chats__search">
          <Search />
          <input type="text" placeholder="Friends" />
        </div>
        <ChatBubble className="chatIcon" />
      </div>
      <div className="chats__posts">
        <h2>HYEYY</h2>
      </div>
    </div>
  );
};

export default Chats;
