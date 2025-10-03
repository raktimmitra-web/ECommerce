// import { getWishlist } from "./wishlist.js"

// const loadWishlistPage=()=>{
//     const wishlist=getWishlist()
//     console.log("wishlist",wishlist)
//     const wishlistContainer=document.getElementById("wishlist-container")
//     wishlistContainer.innerHTML=""
//     wishlist.forEach((item) => {
//         const card=document.createElement("div")
//         card.innerHTML="hello"
//         wishlistContainer.appendChild(card)
//     });
// }

// document.addEventListener("DOMContentLoaded",loadWishlistPage)

import {
  addToCart,
  decreseQuantity,
  increaseQuantity,
  getCart,
} from "./cart.js";
import { showToast } from "./components/toast.js";
import { renderQuantityControls } from "./product.js";
import { getWishlist, setWishlist } from "./wishlist.js";

const loadWishlistPage = () => {
  const wishlist = getWishlist();
  console.log("this is the wishlist", wishlist);

  const wishlistContainer = document.getElementById("wishlist-container");
  wishlistContainer.innerHTML = "";

  wishlist.forEach((product) => {
    const card = document.createElement("div");
    const cart = getCart();
    const existing = cart.find((item) => item.id === product.id);

    card.className =
      "rounded-lg shadow-lg bg-white flex flex-col hover:shadow-xl transition-shadow duration-300 product-card";
    card.innerHTML = `
      <div class="relative">
      <button class="absolute top-4 right-4 deleteFromWishlistBtn" ><i class="fa-solid fa-circle-xmark text-2xl text-red-500"></i></button>
      <div class="bg-white rounded-lg overflow-hidden">
        <img src="${product.images[0].url}" alt="${
      product.name
    }" class="w-full h-60 object-cover">
        <div class="p-4">
          <h3 class="text-2xl font-semibold text-gray-800 mb-2">${
            product.name
          }</h3>
          <p class="text-gray-600 mb-3 line-clamp-3">${product.description}</p>
          <p class="text-lg font-bold text-green-700 mb-4">Cost: $${
            product.price
          }</p>
          <div class="flex gap-4 items-center">
            <a 
              href="product.html?id=${product.id}" 
              class="flex-1 text-center border border-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-100 transition w-full"
            >
              View Now
            </a>
            <div id="controls-${product.id}" class="flex-1 w-full">
              ${
                existing
                  ? renderQuantityControls(existing)
                  : `<button class="addToCartBtn w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                      Add To Cart
                    </button>`
              }
            </div>
          </div>
        </div>
      </div>
      </div>

    `;

    const addToCartBtn = card.querySelector(".addToCartBtn");
    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", () => {
        addToCart(product);
      });
    }

    if (existing) {
      const increaseBtn = card.querySelector(".increase-btn");
      const decreaseBtn = card.querySelector(".decrease-btn");

      if (increaseBtn) {
        increaseBtn.addEventListener("click", () => {
          increaseQuantity(product.id);
        });
      }

      if (decreaseBtn) {
        decreaseBtn.addEventListener("click", () => {
          decreseQuantity(product.id);
        });
      }
    }
    const deleteFromWishlistBtn = card.querySelector(".deleteFromWishlistBtn");
    if (deleteFromWishlistBtn) {
      deleteFromWishlistBtn.addEventListener("click", () => {
        let wishlist = getWishlist();
        const existing = wishlist.find((item) => item.id === product.id);
        if (existing) {
          wishlist = wishlist.filter((item) => item.id !== product.id);
        }
        setWishlist(wishlist);
        loadWishlistPage();
        showToast("Deleted From Wishlist", "danger");
      });
    }
    wishlistContainer.appendChild(card);
  });
  
};

const loadWishlistMarker = () => {
  const wishlist = getWishlist();
  const wishlistMarker = document.getElementById("wishlistMarker");
  wishlistMarker.textContent =`hello `;
}
document.addEventListener("DOMContentLoaded", loadWishlistPage);
document.addEventListener("cartUpdated", loadWishlistMarker);
