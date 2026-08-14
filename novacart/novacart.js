const ShopNowBtn = document.querySelector("#shop-now-btn");
const Heading = document.querySelector("#heroTitle");
const paragraph = document.querySelector("#headinParagraph");
const addToCartButton = document.querySelector("#jacket-cart-btn");
const cartDisplay = document.querySelector("#cart-count");

ShopNowBtn.addEventListener("click", () => {
  ((Heading.textContent = "Welcome to NovaCart!"),
    (paragraph.textContent = "Start exploring our amazing collection today!"),
    (ShopNowBtn.textContent = "Shopping..."));
});
let cartCount = 0;

addToCartButton.addEventListener("click", () => {
  cartCount = cartCount + 1;
  cartDisplay.textContent = cartCount;
});
