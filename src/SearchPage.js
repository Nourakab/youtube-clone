import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
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
        image="./Nounou.jpg"
        channel="How to program"
        verified
        subs="1.1M"
        noOfVideos={10}
        description="Awesome programming in no time!"
      />
      <hr />
    </div>
  );
}

export default SearchPage;
