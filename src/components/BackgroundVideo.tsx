import React from "react";

const BackgroundVideo: React.FC = () => {
  return (
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
    >
      <source
        src="src/assets/backgrounds/wish-background-animated.webm"
        type="video/webm"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
