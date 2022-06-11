import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={<HomeIcon />} title="Home" />
      <SidebarRow Icon={<ExploreOutlinedIcon />} title="Explore" />
      <SidebarRow title="Shorts" />
      <SidebarRow Icon={<SubscriptionsOutlinedIcon />} title="Subscriptions" />
      <hr />
      <SidebarRow Icon={<VideoLibraryOutlinedIcon />} title="Library" />
      <SidebarRow Icon={<HistoryOutlinedIcon />} title="History" />
      <SidebarRow Icon={<OndemandVideoOutlinedIcon />} title="Your videos" />
      <SidebarRow Icon={<WatchLaterOutlinedIcon />} title="Watch Later" />
      <SidebarRow Icon={<ThumbUpOutlinedIcon />} title="Liked videos" />
      <SidebarRow Icon={<ExpandMoreOutlinedIcon />} title="Show more" />
      <hr />
    </div>
  );
}

export default Sidebar;
