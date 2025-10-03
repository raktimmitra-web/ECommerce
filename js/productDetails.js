import { addToCart, decreseQuantity, getCart, increaseQuantity } from "./cart.js"
import { updateCartCount } from "./components/header.js"
import { renderQuantityControls } from "./product.js"

const loadProducts=async()=>{
    
const params=new URLSearchParams(window.location.search)
const id=params.get("id")
console.log(id)
const response=await fetch("./data/products.json")
const products=await response.json();
const product=products.find((p)=>p.id===id)
console.log(product)
const cart=getCart()
const existing=cart.find((item)=>item.id===product.id)
const productDetailsCard=document.getElementById("productDetails")
productDetailsCard.innerHTML = `
  <div class="max-w-6xl px-6 mx-auto">
    <div class="flex flex-col md:flex-row gap-16 mt-4">
      <div class="flex gap-3">
        <div class="border border-gray-500/30 max-w-100 rounded overflow-hidden">
          <img src="${product.images[0].url}" alt="Selected product" class="w-full object-cover max-h-[400px]">
        </div>
      </div>

      <div class="text-sm w-full md:w-1/2">
        <h1 class="text-3xl font-medium">${product.name}</h1>

        <div class="mt-6">
          <p class="text-2xl font-medium">MRP: $ ${product.price}</p>
          <span class="text-gray-500/70">(inclusive of all taxes)</span>
        </div>

        <p class="text-base font-medium mt-6">About Product</p>
        <p class="text-gray-700">${product.description}</p>

        <div class="flex flex-col sm:flex-row items-center mt-10 gap-4">
          <div id="controls-${product.id}" class="flex-1/3 w-full">
            ${
              existing
                ? renderQuantityControls(existing)
                : `<button class="addToCartBtn w-full bg-green-600 text-white px-4 py-3.5 rounded hover:bg-green-700 transition ">
                    Add To Cart
                  </button>`
            }
          </div>
          <button class="buyNowBtn w-full flex-2/3 py-3.5 font-medium bg-green-400 text-white hover:bg-green-600 transition rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
`;
   document.querySelectorAll(".addToCartBtn").forEach(button => {
  button.addEventListener("click", () => {
    addToCart(product);
  });
  updateCartCount()
});

 document.querySelectorAll(".buyNowBtn").forEach(button => {
  button.addEventListener("click", () => {
    addToCart(product);
    window.location.href="checkout.html"
  });
  updateCartCount()
});

if (existing) {
      const increaseBtn = productDetailsCard.querySelector(".increase-btn");
      const decreaseBtn = productDetailsCard.querySelector(".decrease-btn");
      
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
updateCartCount()
}

document.addEventListener("DOMContentLoaded",loadProducts)
