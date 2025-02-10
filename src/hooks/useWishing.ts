import { useState } from "react";
import fetchData from "@services/fetchAPI";

import getCalculatedWishOutput  from "@services/probabilityCalc";

import WishResult  from "@interfaces/WishResult";


const useWishing = (currentBanner: number) => {
  const [wishCount, setWishCount] = useState(0);
  const [isWishing, setIsWishing] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("");

  const startWish = async () => {
    setWishCount((prev) => prev + 1);
    const bannerType = currentBanner === 0 ? "character" : "weapon";
    const wishResult: WishResult = getCalculatedWishOutput(bannerType, pityCounter);

    try {
      const endpoint =
        wishResult.type === "character"
          ? "https://genshin.jmp.blue/characters"
          : "https://genshin.jmp.blue/weapons";
      const data = await fetchData<string[]>(endpoint);

      if (data && data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const itemName = data[randomIndex];
        alert(
          `You got a ${wishResult.rarity}-star ${wishResult.type}: ${itemName}!`
        );
        setCurrentAnimation(
       wishResult.rarity === 5
        ? "src/assets/5star-single.mp4"
          : wishResult.rarity === 4
            ? "src/assets/4star-single.mp4"
            : "src/assets/3star-single.mp4"
        );
        setIsWishing(true);
      } else {
        throw new Error("Failed to fetch data.");
      }
    } catch (error) {
      console.error("Error encountered while wishing:", error);
      alert(`Error encountered while wishing. Information:\n${error}`);
    }
  };

  const stopWish = () => {
    setIsWishing(false);
    setCurrentAnimation("");
  };

  return { wishCount, isWishing, currentAnimation, startWish, stopWish };
};

export default useWishing;