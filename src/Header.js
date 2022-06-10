import React from "react";
import "./Header.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuOutlinedIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
      </div>
      <div className="header__input">
        <input placeholder="Search" type="text" />
        <SearchOutlinedIcon className="header__inputButton" />
        <MicOutlinedIcon className="header__Mic" />
      </div>
      <div className="header__right">
        <VideoCallOutlinedIcon className="header__icon" />
        <AppsOutlinedIcon className="header__icon" />
        <NotificationsNoneOutlinedIcon className="header__icon" />
        <Stack direction="row" spacing={2}>
          <Avatar alt="Nounou" src="./Nounou.jpg" />
        </Stack>
      </div>
    </div>
  );
}

export default Header;
