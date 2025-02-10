// File: src/components/WishAnimation.tsx

import React, {useEffect} from "react";

import Footer from "@components/Footer";
import WishResult from "@services/interfaces/WishResult";

import useWishing from "../hooks/useWishing";

interface WishHandlerProps {
  bannerType: string;
}


const WishHandler: React.FC<WishHandlerProps> = ({bannerType  }) => {
  const { wishResult, isWishing, currentAnimation, startWish, stopWish } = useWishing(bannerType);
  
  // const videoSrc =
  //   bannerType === "standard"
  //     ? "src/assets/5star-single.mp4"
  //     : "src/assets/4star-single.mp4";

useEffect(() => {
    if (wishResult) {
      setTimeout(() => {
        alert(
          `🎉 You got ${wishResult.rarity}-star ${wishResult.type} from the ${wishResult.bannerType} banner: ${wishResult.itemName}!`
        );
      }, 6000); // Delay for animation purposes
    }
    console.log("Wish Result:", wishResult);
  }, [wishResult]); // Runs when wishResult updates

  return (
    // <div className="absolute top-0 w-full h-full z-20 flex items-center justify-center">
    //   <video className="w-full h-full object-cover" autoPlay onEnded={() => {}}>
    //     <source src={videoSrc} type="video/mp4" />
    //     Your browser does not support the video tag.
    //   </video>
    // </div>
  
    
 <div>
      <Footer onWish={startWish} selectedBanner={bannerType} />
      {isWishing && (
        <div className="absolute top-0 w-full h-full z-20 flex items-center justify-center">
          <video
            src={currentAnimation}
            autoPlay
            onEnded={stopWish} // Stop wishing when the video ends
            className="wish-animation"
            controls={false} // Hide controls if you want
            loop={false} // Play once
          />
        </div>
      )}
    </div>
    
  );
};

export default WishHandler;
