import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import "../css/HeaderOptions.css";
import { selectUser } from "../features/counter/userSlice";

function HeaderOptions({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOptions">
      {Icon && <Icon className="headerOptions__icon" />}
      {avatar && (
        <Avatar className="headerOptions__icon">{user?.email[0]}</Avatar>
      )}
      <h3 className="headerOptions__title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
