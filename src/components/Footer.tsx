// File: src/components/Footer.tsx

import React from "react";

interface FooterProps {
  onWish: () => void;
}

const Footer: React.FC<FooterProps> = ({ onWish }) => {
  return (
    <div className="absolute bottom-0 w-full flex justify-center p-4 z-10">
      <button
        className="px-6 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        onClick={onWish}
      >
        Wish
      </button>
    </div>
  );
};

export default Footer;
