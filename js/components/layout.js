import { setupSearch } from "../product.js";
import { footer } from "./footer.js";
import { header } from "./header.js";



export const loadLayout = () => {
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    headerContainer.innerHTML = header();
  }
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = footer();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  loadLayout();
   setTimeout(() => {
    setupSearch(); 
  }, 0);
});

