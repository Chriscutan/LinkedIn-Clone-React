import React from "react";
import "../css/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "../features/counter/userSlice";
import { auth } from "../firebase";

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());

    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://imgs.search.brave.com/MyYcrPF4PV2vYBXJjeDckyUY0qTS7JUq1hhxtHVge9s/rs:fit:934:933:1/g:ce/aHR0cHM6Ly9jcmFj/a2JlcnJ5LmNvbS9z/aXRlcy9jcmFja2Jl/cnJ5LmNvbS9maWxl/cy9zdHlsZXMvbGFy/Z2UvcHVibGljL3Rv/cGljX2ltYWdlcy8y/MDEzL2xpbmtlZGxu/LnBuZz9pdG9rPTZh/eUExTXVLJnRpbWVz/dGFtcD0xMzYzNzQ5/NjI2"
          alt=""
          className="header__logo"
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions avatar={true} title="me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
