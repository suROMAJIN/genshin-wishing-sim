// File: src/components/WishAnimation.tsx

import React from "react";

interface WishAnimationProps {
  banner: "character" | "standard";
}

const WishAnimation: React.FC<WishAnimationProps> = ({ banner }) => {
  const videoSrc =
    banner === "character"
      ? "src/assets/5star-single.mp4"
      : "src/assets/4star-single.mp4";

  return (
    <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center">
      <video className="w-full h-full object-cover" autoPlay onEnded={() => {}}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default WishAnimation;
