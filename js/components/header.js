

export const header = () => {
  return `
  <nav class="relative bg-green-200/90 shadow-md z-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <img class="h-12 w-auto saturate-200" src="./assets/images/logo.png" alt="EcoKart" />
        </div>

        <!-- Desktop Nav -->
        <div class="hidden sm:flex sm:items-center sm:space-x-6">
          <a href="index.html" class="text-gray-700 hover:text-white/80 hover:bg-red-300/10 px-3 py-2 rounded-md text-md font-medium transition">Home</a>
          <a href="index.html#product" class="text-gray-700 hover:text-white/80 hover:bg-red-300/10 px-3 py-2 rounded-md text-md font-medium transition">Products</a>
          <a href="checkout.html" class="relative flex items-center text-gray-700 hover:text-white/80 hover:bg-red-300/10 px-3 py-2 rounded-md text-md font-medium transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6.4a1 1 0 001 1.6h11.4a1 1 0 001-1.6L17 13M7 13h10" />
            </svg>
            <span>Cart</span>
            <span id="cart-count" class="absolute top-0 -right-2 px-2 py-0.5 text-xs font-bold bg-red-600 text-white rounded-full">0</span>
          </a>
        </div>

        <!-- Profile Image -->
        <div class="hidden sm:block">
          <img src="./assets/images/profile_img_1.png" class="w-10 h-10 rounded-full object-cover" alt="Profile" />
        </div>

        <!-- Mobile Menu Button -->
        <div class="sm:hidden flex items-center">
          <button type="button" command="--toggle" commandfor="mobile-menu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-red-300/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
              class="h-6 w-6 in-aria-expanded:hidden">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
              class="h-6 w-6 not-in-aria-expanded:hidden">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <el-disclosure id="mobile-menu" hidden class="sm:hidden bg-green-100 px-4 py-4 space-y-2">
      <a href="index.html" class="block text-gray-800 hover:bg-red-300/10 hover:text-white/80 px-3 py-2 rounded-md text-base font-medium transition">Home</a>
      <a href="index.html#product" class="block text-gray-800 hover:bg-red-300/10 hover:text-white/80 px-3 py-2 rounded-md text-base font-medium transition">Products</a>
      <a href="checkout.html" class="relative block text-gray-800 hover:bg-red-300/10 hover:text-white/80 px-3 py-2 rounded-md text-base font-medium transition">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6.4a1 1 0 001 1.6h11.4a1 1 0 001-1.6L17 13M7 13h10" />
          </svg>
          <span>Cart</span>
          <span id="cart-count-mobile" class="absolute top-1 right-4 px-2 py-0.5 text-xs font-bold bg-red-600 text-white rounded-full">0</span>
        </div>
      </a>
    </el-disclosure>
  </nav>
  `;
};


export function updateCartCount() {
    let cartCount = 0;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(element => {
      cartCount+=element.quantity
    });
    console.log("cart count:",cartCount)
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
      cartCountElement.textContent = cartCount;
      cartCountElement.style.display = cartCount > 0 ? 'inline-flex' : 'none';
    }
  }

  const cartCount=document.getElementById("cart-count")
  if(cartCount)cartCount.addEventListener('DOMContentLoaded', updateCartCount);
