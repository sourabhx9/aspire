import React from "react";
import YouTube from "react-youtube";
import "./StudyVideos.css";

const StudyVideos = () => {
  const videoIds = [
    "mjlsSYLLOSE",
    "x6D51-pz2A4",
    "p-kAI-qOeJA",
    "igcoDFokKzU",
    "OTuph9pJWU4",
    "g7mQGSx5lwY",
  ];

  const videoOptions = {
    height: "315",
    width: "560",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="study-videos-container">
      <h1 className="study-videos-title">📚 Study Videos</h1>
      <div className="videos-wrapper">
        {videoIds.map((videoId, index) => (
          <div key={videoId} className="video-frame">
            <YouTube videoId={videoId} opts={videoOptions} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyVideos;