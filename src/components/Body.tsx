import React from "react";
import characterBanner from "../assets/banners/wanderlust-invocation-2.webp";
import weaponBanner from "../assets/banners/epitome-invocation-1.webp";

interface BodyProps {
  selectedBanner: "character" | "standard";
}

const Body: React.FC<BodyProps> = ({ selectedBanner }) => {
  const bannerImage =
    selectedBanner === "character" ? characterBanner : weaponBanner;

  return (
    <div className="flex justify-center items-center h-full z-10">
      <img
        src={bannerImage}
        alt={`${selectedBanner} banner`}
        className="max-w-full max-h-full rounded-lg"
      />
    </div>
  );
};

export default Body;
