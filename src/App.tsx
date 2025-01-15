/* 
TODO
1. Only body is responsive, refactor flex:grow to header and footer also
2. Develop the switch from page to wish animation to result page

*/
import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

//! TEMPORARY Setup for Banners and Wishes
const banners = [
  { id: 1, image: "src/assets/banners/wanderlust-invocation-2.webp" },
  { id: 2, image: "src/assets/banners/epitome-invocation-1.webp" },
];

const wishAnimations = [
  { id: 1, video: "src/assets/3star-single.mp4" },
  { id: 2, video: "src/assets/4star-single.mp4" },
  { id: 3, video: "src/assets/5star-single.mp4" },
];

function App() {
  const [wishCount, setWishCount] = useState(0); //* Banner ID #1 is weapon banner, banner #2 is character banner
  //* in useState use index numbering so banner #1 is accessed in useState(0)
  const [currentBanner, setBanner] = useState(0);
  // const [isWishing, setIsWishing] = useState(false);
  // const [currentAnimation, setCurrentAnimation] = useState("");

  // const startWish = (wishType: string) => {
  //   const animation = wishAnimations[wishType];
  //   if (animation) {
  //     setCurrentAnimation(animation);
  //     setIsWishing(true);
  //   }
  // };

  // const stopWish = () => {
  //   setIsWishing(false);
  //   setCurrentAnimation("");
  // };

  // const toggleBanner = () => {
  //   setBanner((prev) => (prev === 0 ? 1 : 0));
  // };

  return (
    <>
      <div className="relative h-screen overflow-hidden font-optimized-global">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="src/assets/backgrounds/wish-background-animated.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
        <Header currentBanner={currentBanner} setBanner={setBanner} />
        <Body currentBanner={currentBanner} banners={banners} />
        <Footer wishCount={wishCount} currentBanner={currentBanner} />
        //! PART in development: Wishing Animation
        {/* {isWishing ? (
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <video
              src={currentAnimation}
              autoPlay
              className="w-full h-full object-contain"
              onEnded={stopWish}
            />
          </div>
        ) : (
          <>
            <Header currentBanner={currentBanner} setBanner={setBanner} />
            <Body currentBanner={currentBanner} banners={banners} />
            <Footer startWish={startWish} />
          </>
        )} */}
      </div>
    </>
  );
}

export default App;
