const shareElement = document.querySelector(".share-hidden");
const btnShare = document.querySelector(".share");
const mobileShare = document.querySelector(".share-mobile");

const showShare = function () {
  shareElement.classList.toggle("hidden");
};
btnShare.addEventListener("click", showShare);
mobileShare.addEventListener("click", showShare);
