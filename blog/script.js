const hamButton = document.querySelector(".menu");
const closeBtn = document.querySelector(".hamburger");

hamButton.addEventListener("click", () => {
  hamButton.classList.add("hide");
  closeBtn.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  hamButton.classList.remove("hide");
  closeBtn.classList.remove("active");
});