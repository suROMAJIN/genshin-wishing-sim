/* 
TODO
1. Only body is responsive, refactor flex:grow to header and footer also
2. Develop the switch from page to wish animation to result page

*/
// File: src/App.tsx

import React, { useState } from "react";
// Tailwind imported in index.css

// Components
import BackgroundVideo from "@components/BackgroundVideo";
import Header from "@components/Header";
import Body from "@components/Body";
//import Footer from "@components/Footer";
import WishHandler from "@components/WishHandler";

const App: React.FC = () => {
  const [selectedBanner, setSelectedBanner] = useState<string>("standard");

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <BackgroundVideo />
      <Header
        selectedBanner={selectedBanner}
        onSelectBanner={setSelectedBanner}
      />
      <Body selectedBanner={selectedBanner} />
      {/* <Footer onWish={handleWish} />

      {isAnimating && <WishHandler bannerType={selectedBanner} />} */}
      <WishHandler bannerType={selectedBanner} />
    </div>
  );
};

export default App;
