import React from 'react';
import VideoPlayer from './VideoPlayer';

const App = () => {
  return (
    <div>
      <h1>Custom Video Player</h1>
      <VideoPlayer src="https://www.example.com/video.mp4" />
    </div>
  );
};

export default App;
