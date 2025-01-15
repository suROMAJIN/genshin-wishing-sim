import React from "react";
import fetchData from "../services/fetchAPI";
import { getWishResult, WishResult } from "../services/probabilityCalc";

interface RollingFunctionProps {
  wishCount: number;
  currentBanner: number;
  //startWish: (wishType: string) => void;
}

const bannerSelected = (currentBanner: number) => {
  return currentBanner === 0 ? "character" : "weapon";
};

const Footer: React.FC<RollingFunctionProps> = ({
  wishCount,
  currentBanner,
}) => {
  //! Temporary code segment to test random wish generation
  async function handleWish() {
    //! Take note of temporary platforming of code here, wishCount and also the rolling logic
    wishCount++;
    const bannerType = bannerSelected(currentBanner);

    const wishResult: WishResult = getWishResult(bannerType, wishCount);

    try {
      const endpoint =
        wishResult.type === "character"
          ? "https://genshin.jmp.blue/characters"
          : "https://genshin.jmp.blue/weapons";
      const data = await fetchData<string[]>(endpoint);
      if (data && data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);

        alert(`You got ${data[randomIndex]}!`);

        console.log("Wish count is now", wishCount);
      } else {
        throw "Failed to fetch character data.";
      }
    } catch (error) {
      alert(`Error encountered while wishing.\n${error}`);
    }
  }

  return (
    <footer className="relative z-10 flex justify-center mt-4 p-4">
      <div className="flex flex-col">
        <button
          className="my-1 py-2 px-4 bg-gray-500 text-white rounded hover:bg-mainGrey transition"
          onClick={handleWish}
        >
          Wish 1x
        </button>
      </div>
    </footer>
  );
};

export default Footer;
