import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="R&B 2024"
          views="2.3M views"
          timestamp="3 days ago"
          channelImage="../images/icon2.png"
          channel="VIRAL HITS"
          image="../images/youtube1.png"
        />
        <VideoCard
          title="Helicopter ride"
          views="132K views"
          timestamp="15 days ago"
          channelImage="../images/icon3.png"
          channel="Discovery"
          image="../images/youtube2.png"
        />

        <VideoCard
          title="Music that makes u more inspired to study & work"
          views="9.2M views"
          timestamp="9 months ago"
          channelImage="../images/icon1.png"
          channel="Little Soul"
          image="../images/youtube3.png"
        />

        <VideoCard
          title="How to become a millionaire"
          views="2.3M views"
          timestamp="3 days ago"
          channelImage="../images/Nounou.jpg"
          channel="Nounou"
          image="../images/youtube4.png"
        />

        <VideoCard
          title="Cold brew"
          views="10.3M views"
          timestamp="2 days ago"
          channelImage="../images/icon5.png"
          channel="Nespresso"
          image="../images/youtube5.png"
        />

        <VideoCard
          title="Black Market Organs(Full Episode)|Trafficked with..."
          views="2.4M views"
          timestamp="8 months ago"
          channelImage="../images/icon6.png"
          channel="National Geographic"
          image="../images/youtube6.png"
        />

        <VideoCard
          title="Relaxing Chill Hip Hop Lo-Fi Beats- Perfect Music for Study,..."
          views="130 views"
          timestamp="1 day ago"
          channelImage="../images/icon7.png"
          channel="Black Girl Serenity"
          image="../images/youtube7.png"
        />

        <VideoCard
          title="Alan Walker, Dua Lipa, Coldplay, Martin Garrix & Kygo, The..."
          views="889K views"
          timestamp="3 weeks ago"
          channelImage="../images/icon8.png"
          channel="Selected House Vibes"
          image="../images/youtube8.png"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
