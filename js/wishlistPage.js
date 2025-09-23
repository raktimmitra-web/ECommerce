import { getWishlist } from "./wishlist.js"

const loadWishlistPage=()=>{
    const wishlist=getWishlist()
    const wishlistContainer=document.getElementById("wishlist-container")
    wishlistContainer.innerHTML=""
    wishlist.forEach((item) => {
        const card=document.createElement("div")
        card.innerHTML="hello"
        wishlistContainer.appendChild(card)
    });
}

document.addEventListener("DOMContentLoaded",loadWishlistPage)