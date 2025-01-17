import React from "react";

interface HeaderProps {
  selectedBanner: "standard" | "weapon";
  onSelectBanner: (banner: "standard" | "weapon") => void;
}

const Header: React.FC<HeaderProps> = ({ selectedBanner, onSelectBanner }) => {
  return (
    <div className="absolute top-0 w-full flex justify-center gap-4 p-4 z-10">
      <button
        className={`px-4 py-2 text-white ${
          selectedBanner === "standard" ? "bg-blue-500" : "bg-gray-700"
        } rounded`}
        onClick={() => onSelectBanner("standard")}
      >
        Standard Banner
      </button>
      <button
        className={`px-4 py-2 text-white ${
          selectedBanner === "weapon" ? "bg-blue-500" : "bg-gray-700"
        } rounded`}
        onClick={() => onSelectBanner("weapon")}
      >
        Weapon Banner
      </button>
    </div>
  );
};

export default Header;
