export interface WishResult {
  rarity: number; // 3, 4, or 5
  type: "character" | "weapon";
}

/**
 *@param bannerType "character" or "weapon"
 * @param pity4star Number of pulls since last 4★ or better
 * @param pity5star Number of pulls since last 5★
 * @returns WishResult with rarity of 3, 4, or 5, and type "character" or "weapon"
 */
export function getWishResult(
  //bannerType: "character" | "weapon",
  bannerType: string,
  wishCount: number
): WishResult {
  // Handle guaranteed pity
  if (wishCount >= 79) {
    // Guaranteed 5★ on 80th pull
    return { rarity: 5, type: getRandomType(bannerType, 5) };
  }
  if (wishCount >= 9) {
    // Guaranteed 4★ or better on 10th pull
    // 4★ check here; 5★ still possible but for simplicity, we do 4★
    return { rarity: 4, type: getRandomType(bannerType, 4) };
  }

  // Normal probability rolls
  // Adjust these for your actual rates:
  // Example: character banner => 0.6% for 5★, 5.1% for 4★, 94.3% for 3★
  // Example: weapon banner => 0.7% for 5★, 6.0% for 4★, 93.3% for 3★
  // Here, we pick rates depending on bannerType:
  let fiveStarRate = bannerType === "character" ? 0.6 : 0.7;
  let fourStarRate = bannerType === "character" ? 5.1 : 6.0;
  // Convert to fraction
  fiveStarRate /= 100;
  fourStarRate /= 100;

  const roll = Math.random();
  if (roll < fiveStarRate) {
    return { rarity: 5, type: getRandomType(bannerType, 5) };
  } else if (roll < fiveStarRate + fourStarRate) {
    return { rarity: 4, type: getRandomType(bannerType, 4) };
  } else {
    return { rarity: 3, type: getRandomType(bannerType, 3) };
  }
}

/**
 * Returns whether the pulled item is a character or a weapon.
 * You can adjust probabilities or just pick based on bannerType, etc.
 */
function getRandomType(
  bannerType: "character" | "weapon",
  rarity: number
): "character" | "weapon" {
  // For simplicity, if banner is "character," favor characters at 4★/5★
  // or do a random check. Customize as needed.
  if (bannerType === "character") {
    // E.g., a small chance the 4★ or 5★ is actually a weapon
    const roll = Math.random();
    // Adjust these probabilities to your liking
    if (roll < 0.2) return "weapon";
    return "character";
  } else {
    // For weapon banner, it’s mostly weapons, but a small chance for a character
    // const roll = Math.random();
    // if (roll < 0.2) return "character";
    return "weapon";
  }
}
