export const footer=()=>{
    return  `  <div class="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
        <div
          class="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6"
        >
          <div class="md:max-w-96">
            <div class="flex align-center">
              <img src="./assets/images/logo.png" class="h-15 w-auto" />
              <p class="my-auto text-xl font-semibold">EcoKart</p>
            </div>
            <p class="mt-6 text-sm">
              EcoKart is a environment friendly platform where you can buy your
              organic product.
            </p>
          </div>
          <div class="flex-1 flex items-start md:justify-end gap-20">
            <div>
              <h3 class="font-semibold text-lg mb-4">Company</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="#" class="hover:text-gray-900">About Us</a></li>
                <li><a href="#" class="hover:text-gray-900">Features</a></li>
                <li><a href="#" class="hover:text-gray-900">FAQs</a></li>
                <li><a href="#" class="hover:text-gray-900">Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h3 class="font-semibold text-lg mb-4">Support</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="#" class="hover:text-gray-900">Help Center</a></li>
                <li>
                  <a href="#" class="hover:text-gray-900">Safety Center</a>
                </li>
                <li>
                  <a href="#" class="hover:text-gray-900"
                    >Community Guidelines</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="pt-4 text-xs md:text-sm pb-5">
            Copyright 2025 © <a href="https://prebuiltui.com">EcoKart</a>. All
            Right Reserved.
          </p>
          <div class="flex gap-x-2 items-center">
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    `
}