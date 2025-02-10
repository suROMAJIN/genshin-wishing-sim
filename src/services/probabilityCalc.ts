/*
 TODO: Reset four-star pity, logic can be implemented to reset only if 4 star is pulled
*/
import WishResult from "@interfaces/WishResult";

/**
 * Returns whether the pulled item is a character or a weapon.
 * Adjustable probabilities or can pick based on bannerType, etc.
 */
const getRandomType = (
  bannerType: string,
 // rarity: number
): string => {
  // For simplicity, if banner is "character," favor characters at 4★/5★
  // or do a random check. Customize as needed.
  if (bannerType === "standard") {
    // E.g., a small chance the 4★ or 5★ is actually a weapon
    const roll = Math.random();
    // Adjust these probabilities in the future, this is a 6% chance for weapon
    if (roll > 0.94) return "weapon";
    return "character";
  } else if (bannerType === "weapon") {
    // For weapon banner, it’s mostly weapons, but a small chance for a character
    // const roll = Math.random();
    // if (roll < 0.2) return "character";
    return "weapon";
  } else {
      // for now this segments gonna handle if in the future additional banners are added 
      return "character";
    }
}



/**
 *@param bannerType "character" or "weapon"
 * @param pity4star Number of pulls since last 4★ or better
 * @param pity5star Number of pulls since last 5★
 * @returns WishResult with rarity of 3, 4, or 5, and type "character" or "weapon"
 */
const getCalculatedWishOutput = ({
  bannerType,
  pityCounter,
}: WishResult): WishResult => {

let newPityCounter = { ...pityCounter, allWishCounts: pityCounter.allWishCounts + 1 };
  // Handle guaranteed 5 star pity
  if (pityCounter.fiveStarPity >= 79) {
    return {
      bannerType,
      rarity: 5,
      type: getRandomType(bannerType),
      //itemName: "None at this moment in the program, these data will be passed to the API hook useWishing
      pityCounter: { ...newPityCounter, fiveStarPity: 0, fourStarPity: 0 },
    };
  }

  if (pityCounter.fourStarPity >= 9) {
    return {
      bannerType,
      rarity: 4,
      type: getRandomType(bannerType),
       pityCounter: { ...newPityCounter, fourStarPity: 0, fiveStarPity: pityCounter.fiveStarPity + 1 },
    };
  }
  // Normal probability rolls sa bannners
  // Adjust these for your actual rates:
  // Example: character banner => 0.6% for 5★, 5.1% for 4★, 94.3% for 3★
  // Example: weapon banner => 0.7% for 5★, 6.0% for 4★, 93.3% for 3★
  // Here, we pick rates depending on bannerType:
  // For now and for future banners, it will assume the right argument values
  // let fiveStarRate = bannerType === "standard" ? 0.006 : 0.007; // 0.6% and 0.7%
  // let fourStarRate = bannerType === "standard" ? 0.051 : 0.060; // 5.1% and 6.0%

  let fiveStarRate = bannerType === "standard" ? 0.6 : 0.7; // 60% and 70%
  let fourStarRate = bannerType === "standard" ? 0.3 : 0.2; // 30% and 20%


  const roll = Number(Math.random().toFixed(3));
  if (roll <= fiveStarRate) {
  return {
    bannerType,
    rarity: 5,
    type: getRandomType(bannerType),
    //itemName: "5★ Item", // Replace with actual item name logic
     pityCounter: { ...newPityCounter, fiveStarPity: 0, fourStarPity: 0 },
  };
} 

  else if (roll <= fiveStarRate + fourStarRate) {
    return {
      bannerType,
      rarity: 4,
      type: getRandomType(bannerType),
      pityCounter: { ...newPityCounter, fourStarPity: 0, fiveStarPity: pityCounter.fiveStarPity + 1 },
    };
  }

  else {
    return {
      bannerType,
      rarity: 3,
      type: getRandomType(bannerType),
      pityCounter: { ...newPityCounter, fiveStarPity: pityCounter.fiveStarPity + 1, fourStarPity: pityCounter.fourStarPity + 1 },
    };
  }
}

export default getCalculatedWishOutput;