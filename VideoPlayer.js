// src/components/VideoPlayer.js
import React, { useRef, useEffect, useState } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ src, title }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsPlaying(true);
          entry.target.play();
        } else {
          setIsPlaying(false);
          entry.target.pause();
        }
      });
    }, options);

    observer.observe(videoRef.current);

    return () => {
      observer.unobserve(videoRef.current);
    };
  }, []);

  const handleTogglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowUp':
        // Implement logic for navigating to the previous video
        console.log('Navigate to previous video');
        break;
      case 'ArrowDown':
        // Implement logic for navigating to the next video
        console.log('Navigate to next video');
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="video-player-container"
      tabIndex={0} // This makes the div focusable and enables key events
      onKeyDown={handleKeyDown}
    >
      <video
        ref={videoRef}
        className="video-player"
        src={src}
        loop
        muted
      ></video>
      <div className="controls">
        <button onClick={handleTogglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
