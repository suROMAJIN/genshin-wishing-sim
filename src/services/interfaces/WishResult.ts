interface WishResult {
  bannerType: string; // Type of the banner (e.g., "character" or "weapon" or more banners in the future)
  pityCounter: {
    allWishCounts: number; // Total number of wishes made
    fiveStarPity: number; // Number of pulls since last 5★
    fourStarPity: number; // Number of pulls since last 4★
  };
  
  /* So basically the idea here is that these attributes will only be filled after getting the output
  so these remain empty when user is just making the wish, or the "input"
  
  */
  rarity?: number; // Rarity of the item (3, 4, or 5)
  type?: string; // Type of the item (e.g., "character" or "weapon")
  itemName?: string; // Name of the item that was pulled

  /*******/
}

export default WishResult;