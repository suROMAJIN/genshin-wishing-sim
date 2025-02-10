import { useState } from "react";
import fetchData from "@services/fetchAPI";

import getCalculatedWishOutput  from "@services/probabilityCalc";

import WishResult  from "@interfaces/WishResult";


const useWishing = (selectedBanner: string) => {
  const [wishCount, setWishCount] = useState(0);
  const [isWishing, setIsWishing] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("");
  const [pityCounter, setPityCounter] = useState({
    allWishCounts: 0,
    fiveStarPity: 0,
    fourStarPity: 0,
  });

  const [wishResult, setWishResult] = useState<WishResult | null>(null);

  const startWish = async () => {
    setWishCount((prev) => prev + 1);
    setIsWishing(true);

    // Calculate wish result
    const wishResult = getCalculatedWishOutput({
      bannerType: selectedBanner,
      pityCounter,
    });

    // Update pity counter state
    setPityCounter(wishResult.pityCounter);

    try {
      const endpoint =
        wishResult.type === "character"
          ? "https://genshin.jmp.blue/characters"
          : "https://genshin.jmp.blue/weapons";

      const data = await fetchData<string[]>(endpoint);
      if (!data || data.length === 0) throw new Error("No data received.");

      const randomIndex = Math.floor(Math.random() * data.length);
      const itemName = data[randomIndex];
      setWishResult({ ...wishResult, itemName });

      // Set animation
      setCurrentAnimation(
        wishResult.rarity === 5
          ? "src/assets/5star-single.mp4"
          : wishResult.rarity === 4
          ? "src/assets/4star-single.mp4"
          : "src/assets/3star-single.mp4"
      );

     // console.log("Wish Result:", wishResult);
    } catch (error) {
      console.error("Wish Error:", error);
      alert(`Wish failed! Error: ${error}`);
    }
  };

  const stopWish = () => {
    setIsWishing(false);
    setCurrentAnimation("");
  };

  return { wishResult, isWishing, currentAnimation, startWish, stopWish, pityCounter };
};


export default useWishing;