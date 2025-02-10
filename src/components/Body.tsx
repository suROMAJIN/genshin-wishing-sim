import React, {useState, useEffect} from "react";
import standardBanner from "../assets/banners/wanderlust-invocation-2.webp";
import weaponBanner from "../assets/banners/epitome-invocation-1.webp";

interface BodyProps {
  selectedBanner: string
}

const Body: React.FC<BodyProps> = ({ selectedBanner }) => {
  const [currentImage, setCurrentImage] = useState<string>(selectedBanner === "standard" ? standardBanner : weaponBanner);
  const [isFadingIn, setIsFadingIn] = useState<boolean>(false);

  useEffect(() => {
    setIsFadingIn(true);
    const timer = setTimeout(() => {
      // Update the current image after fade out
      setCurrentImage(selectedBanner === "standard" ? standardBanner : weaponBanner);
      setIsFadingIn(false);
    }, 500); // Match this duration with  CSS transition duration

    return () => clearTimeout(timer);
  }, [selectedBanner]);

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="relative w-full max-w-1xl h-96 overflow-hidden">
    {/* Old image (fades out immediately) */}
        <img
          src={currentImage}
          alt={`${selectedBanner} banner`}
          className={`absolute w-full h-full object-contain rounded-lg transition-opacity   ${isFadingIn ? 'opacity-0' : 'opacity-100'}`}
        />
        
        {/* New image (fades in smoothly) */}
        <img
          src={selectedBanner === "standard" ? standardBanner: weaponBanner }
          alt={`${selectedBanner === "standard" ? "standard" : "weapon"} banner`}
          className={`absolute w-full h-full object-contain rounded-lg transition-opacity duration-500 ${isFadingIn ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </div>
  );
};

export default Body;
