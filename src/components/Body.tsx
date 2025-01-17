import React from "react";
import standardBanner from "../assets/banners/wanderlust-invocation-2.webp";
import weaponBanner from "../assets/banners/epitome-invocation-1.webp";

interface BodyProps {
  selectedBanner: "standard" | "weapon";
}

const Body: React.FC<BodyProps> = ({ selectedBanner }) => {
  const bannerImage =
    selectedBanner === "standard" ? standardBanner : weaponBanner;

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="relative w-full max-w-1xl h-96">
        <img
          src={bannerImage}
          alt={`${selectedBanner} banner`}
          className="absolute  w-full h-full object-contain rounded-lg scale-110"
        />
      </div>
    </div>
  );
};

export default Body;
