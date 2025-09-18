
import { updateCartCount } from "./components/header.js"
import { showToast } from "./components/toast.js"
import { updateProductUI } from "./product.js"

export const getCart=()=>{
    return JSON.parse(localStorage.getItem("cart"))||[]
}

export const setCart=(cart)=>{
     localStorage.setItem("cart",JSON.stringify(cart))
}

export const addToCart=(product)=>{
    let cart=getCart()
    console.log("cart",cart)
    const existing=cart.find((item)=>item.id===product.id)
    if(existing) {
        existing.quantity+=1;
        showToast("Added to cart");
    }
    else {
        cart.push({...product,quantity:1})
        showToast("Added to cart");
    }
    setCart(cart)
    updateCartCount()
     //window.location.href="checkout.html"
    console.log(cart)
    updateProductUI(product.id)
    }

export const deleteFromCart=(product)=>{
    let cart=getCart()
    const productData=cart.find((item)=>item.id===product.id)
    if(productData.quantity>1) {
        productData.quantity-=1;
        showToast("Removed from cart","remove");
    }
    else{
        cart=cart.filter((item)=>item.id!==productData.id)
        setCart(cart)
        showToast("Removed from cart","remove");
    }
    updateCartCount()
    console.log(cart)
    setCart(cart)
}


export const increaseQuantity=(productId)=>{
    const cart=getCart()
    let item=cart.find(i=>i.id===productId)
    if(item){
        item.quantity++
        setCart(cart);
        showToast("Added to cart");
        updateCartCount()
        updateProductUI(productId)
    }
}

export const decreseQuantity=(productId)=>{
    let cart=getCart()
    let item=cart.find(i=>i.id===productId)
    if(item){
        item.quantity--;
        if(item.quantity<=0){
            cart=cart.filter((item)=>item.id!==productId)
        }
        setCart(cart);
        showToast("Removed from cart","remove");
        updateCartCount()
        updateProductUI(productId)
    }
}
