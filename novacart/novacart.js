const ShopNowBtn = document.querySelector("#shop-now-btn");
const Heading = document.querySelector("#heroTitle");
const paragraph = document.querySelector("#headinParagraph");

ShopNowBtn.addEventListener("click", () => {
  ((Heading.textContent = "Welcome to NovaCart!"),
    (paragraph.textContent = "Start exploring our amazing collection today!"),
    (ShopNowBtn.textContent = "Shopping..."));
});
