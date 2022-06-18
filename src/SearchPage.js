import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTERS</h2>
      </div>
      <hr />

      <ChannelRow
        image="Nounou.jpg"
        channel="Nounou"
        verified
        subs="1.1M"
        noOfVideos={10}
        description="Awesome programming in no time!"
      />
      <hr />
      <VideoRow
        views="650K"
        subs="1.1M"
        description="React 101"
        timestamp="50 seconds ago"
        channel="Nounou"
        image="Nounou.jpg"
      />
    </div>
  );
}

export default SearchPage;
