import { deleteFromCart, getCart } from "./cart.js"
import { showToast } from "./components/toast.js"

const renderCart=()=>{
    const cartData=getCart()
    console.log("cart data:", cartData)
    const cartContainer=document.getElementById("cartContainer")
    cartContainer.innerHTML=""
    if (cartData.length===0) cartContainer.innerHTML="<h2>No item is added to cart</h2>"
    else{
        cartData.forEach((product) => {
            const cartItem=document.createElement("div")
            cartItem.className="grid grid-cols-[1fr_1fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3  cart-item"
            cartItem.innerHTML=`
                        <div class="flex items-center md:gap-6 gap-3">
                            <div class="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded overflow-hidden">
                                <img class="max-w-full h-full object-cover" src=${product.images[0].url} alt=${product.name} />
                            </div>
                           
                        </div>
                        <p class="text-center">${product.quantity}</p>
                        <p class="text-center">${product.price * product.quantity}</p>
                        <button class="cursor-pointer mx-auto delete-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0" stroke="#FF532E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
            `
            cartItem.querySelector(".delete-item").addEventListener("click",()=>{
                deleteFromCart(product)
                renderCheckoutPage();
            })
            cartContainer.appendChild(cartItem)
        });
    }
}

const renderOrderPricing=(discount=0,appliedCoupon=null)=>{
    const cartItem=getCart()
    const {totalCost,totalPrice,tax}=calculateTotalCost()
    const finalPrice=(totalPrice-discount).toFixed(2)
    const orderContainer=document.getElementById("order-pricing")
    orderContainer.innerHTML=""
    if(cartItem.length===0) orderContainer.innerHTML="<h2>No item is in the cart<h2>"
    else{
        orderContainer.innerHTML=`
          <p class="flex justify-between">
                        <span>Price</span><span>${totalCost.toFixed(2)}</span>
          </p>
           <p class="flex justify-between">
                        <span>Shipping Fee</span><span class="text-green-600">Free</span>
           </p>
            <p class="flex justify-between">
                        <span>Tax (2%)</span><span class="text-green-600">${tax.toFixed(2)}</span>
           </p>
           ${
      appliedCoupon
        ? `<p class="flex justify-between text-sm text-green-700">
            <span>Coupon (${appliedCoupon})</span><span>-₹${discount.toFixed(2)}</span>
          </p>`
        : ""
       }
            <p class="flex justify-between text-lg font-medium mt-3">
                        <span>Total Amount:</span><span>${finalPrice}</span>
             </p>
        `
    }
}
const calculateTotalCost=()=>{
     const cartItem=getCart()
     let totalCost=0;
     cartItem.forEach((item)=>{
        totalCost+=item.price*item.quantity;
     }
    )
    let tax=(totalCost*2/100)
    let totalPrice=(totalCost+tax).toFixed(2)
    return {totalCost,totalPrice,tax}
}

const renderTotalItems=()=>{
     const cartItem=getCart()
     const totalItems=document.getElementById("total-items");
     totalItems.innerHTML= `
     ${cartItem.length} Items
     `
}
export const renderCheckoutPage=()=>{
    renderCart()
    renderOrderPricing()
    renderTotalItems()
}


const shippingForm = document.getElementById("shipping-form");
if (shippingForm) {
  shippingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const formdata = new FormData(e.target);
    const shippingData = Object.fromEntries(formdata.entries());
    const cartData = getCart();

    console.log(cartData);
    console.log(shippingData);
    const validation=validate(shippingData, cartData)
    console.log(validation)
    if(validation.status){
        const order = {
      id: Date.now(),
      name: shippingData.name,
      email: shippingData.email,
      address: shippingData.address,
      phoneNumber: parseInt(shippingData.phoneNumber),
      paymentOption: shippingData.paymentOption,
      totalCost: calculateTotalCost().totalPrice,
      expectedDelivery: (()=>{
         let date=new Date()
         date.setDate(date.getDate()+7)
         return date.toLocaleDateString()
      })()
    };
    showToast("Order Placed")
    localStorage.setItem("Order", JSON.stringify(order));
    localStorage.removeItem("cart");
    window.location.href = "confirmation.html";
    }
    else{
        showToast(validation.message,"error")
    }
  });
}

const validate = (shippingData, cartData) => {
  if (cartData.length === 0) {
    return {
      status: false,
      message: "Cart is empty",
    };
  }

  if (!shippingData.name || shippingData.name.trim().length < 2) {
    return {
      status: false,
      message: "Name should be at least 2 characters long",
    };
  }

  if (!shippingData.address || shippingData.address.trim().length < 5) {
    return {
      status: false,
      message: "Address should be at least 5 characters long",
    };
  }

  const phoneRegex = /^[0-9]{10,}$/;
  if (!shippingData.phoneNumber || !phoneRegex.test(shippingData.phoneNumber)) {
    return {
      status: false,
      message: "Invalid phone number",
    };
  }
  return {
    status: true,
  }; 
};

const couponForm=document.getElementById("coupon-form")
const couponMessage = document.getElementById("coupon-message");

if (couponForm) {
  couponForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const input = document.getElementById("coupon");
    const code = input?.value.trim().toUpperCase();
    console.log(code)
    if (!code) return;

    try {
      const response = await fetch("./data/coupon.json");
      const coupons = await response.json();

      const cart = getCart();
      const total = calculateTotalCost().totalPrice;
      const coupon = coupons.find(c => c.code === code);

      if (!coupon) {
        return;
      }

      let discount = 0;
      if (coupon.discountType === "percentage") {
        discount = (coupon.value / 100) * total;
      } else {
        discount = coupon.value;
      }
      discount = Math.min(discount, total); 
      renderOrderPricing(discount, coupon.code);
     
    } catch (error) {
      console.error("Coupon error:", error);
      
    }
  });
}


document.addEventListener("DOMContentLoaded",renderCheckoutPage)
