import { updateInnerCartWishlistIcon } from "./product.js";

export const getWishlist = () => {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
};

export const setWishlist = (wishlist) => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

export const addToWishlist = (product) => {
  let wishlist = getWishlist();
  const existing = wishlist.find((item) => item.id === product.id);
  if (!existing) {
    wishlist.push({ ...product, isWishListed: true });
  }
  setWishlist(wishlist);
  updateInnerCartWishlistIcon(product.id);
  console.log(wishlist);
};

export const deleteFromWishlist = (product) => {
  let wishlist = getWishlist();
  const existing = wishlist.find((item) => item.id === product.id);
  if (existing) {
    wishlist = wishlist.filter((item) => item.id !== product.id);
  }
  setWishlist(wishlist);
  updateInnerCartWishlistIcon(product.id);
  console.log(wishlist);
};
