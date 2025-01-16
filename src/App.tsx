/* 
TODO
1. Only body is responsive, refactor flex:grow to header and footer also
2. Develop the switch from page to wish animation to result page

*/
// File: src/App.tsx

import React, { useState } from "react";
// Tailwind imported in index.css

// Components
import BackgroundVideo from "./components/BackgroundVideo";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import WishAnimation from "./components/WishAnimation";

const App: React.FC = () => {
  const [selectedBanner, setSelectedBanner] = useState<
    "character" | "standard"
  >("character");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleWish = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      alert(`You got a rare item from the ${selectedBanner} banner!`);
    }, 6000); // Assume video duration is 6 seconds
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <BackgroundVideo />
      <Header
        selectedBanner={selectedBanner}
        onSelectBanner={setSelectedBanner}
      />
      <Body selectedBanner={selectedBanner} />
      <Footer onWish={handleWish} />

      {isAnimating && <WishAnimation banner={selectedBanner} />}
    </div>
  );
};

export default App;
