export const footer=()=>{
    return  ` <div class="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
      <div class="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div class="md:max-w-96">
          <div class="flex align-center">
            <img src="./assets/images/logo.png" class="h-15 w-auto"/>
            <p class="my-auto text-xl font-semibold">EcoKart</p>
          </div>
          <p class="mt-6 text-sm">
            EcoKart is a environment friendly platform where you can buy your organic product.
          </p>
        </div>
        <div class="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 class="font-semibold text-gray-800 mb-5">Subscribe to our newsletter</h2>
            <div class="text-sm space-y-2">
              <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
              <div class="flex items-center gap-2 pt-4">
                <input id="newsletter-email" class="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-green-600 outline-none w-full max-w-64 h-9 rounded px-2" type="email" placeholder="Enter your email">
                <button id="newsletter-subscribe" class="bg-green-600 w-24 h-9 text-white rounded">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2025 © <a href="https://prebuiltui.com">EcoKart</a>. All Right Reserved.
      </p>
    </div>
    `
}