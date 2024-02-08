import React, { useRef, useState } from 'react';
import './VideoPlayer.css'; // Import your CSS file for styling

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
    videoRef.current.volume = parseFloat(e.target.value);
  };

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        className="video-player__video"
        controls
        onClick={togglePlay}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-player__controls">
        <button className="video-player__play-btn" onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
          className="video-player__volume-slider"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
