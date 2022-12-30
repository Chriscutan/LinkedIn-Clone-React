import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import "../css/Sidebar.css";
import { selectUser } from "../features/counter/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://imgs.search.brave.com/NoYbEuAp44A3Qc6geFDO1h7EH4Gh4i2l4QxN0JKfpdo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMud2FsbHBhcGVy/c2Rlbi5jb20vaW1h/Z2UvZG93bmxvYWQv/cmFpbmJvdy1wYWlu/dC1zcGxhc2hfYTJ0/cGFHMlVtWnFhcmFX/a3BKUm9hMlZscldk/c1pXVS5qcGc"
          alt=""
        />
        <Avatar className="sidebar__avatar" src={user.photoURL}>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,590</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,430</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("React JS")}
        {recentItem("Javascript")}
        {recentItem("Python")}
      </div>
    </div>
  );
}

export default Sidebar;
