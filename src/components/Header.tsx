import React from "react";

interface HeaderProps {
  currentBanner: number;
  setBanner: (banner: number) => void;
}

const Header: React.FC<HeaderProps> = ({ currentBanner, setBanner }) => {
  return (
    <header className="relative z-10 flex justify-center p-5 ">
      <button
        onClick={() => setBanner(0)}
        className={`mx-2 py-2 px-1 rounded ${
          currentBanner === 0 ? "bg-blue-500 text-white" : "bg-gray-300"
        }`}
      >
        Standard Banner
      </button>
      <button
        onClick={() => setBanner(1)}
        className={`mx-2 py-2 px-1 rounded ${
          currentBanner === 1 ? "bg-blue-400 text-white" : "bg-gray-300"
        }`}
      >
        Weapon Banner
      </button>
    </header>
  );
};

export default Header;
