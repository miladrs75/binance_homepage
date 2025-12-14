const btcContent = document.querySelector(".content");
const toggleBtn = document.querySelector(".toggle-btn");
const blurLayer = document.querySelector(".blur-layer");

toggleBtn.addEventListener("click", () => {
  btcContent.classList.toggle("active");

  if (btcContent.classList.contains("active")) {
    toggleBtn.innerText = "Show Less";
    blurLayer.classList.add("active");
} else {
    toggleBtn.innerText = "Show More";
    blurLayer.classList.remove("active");
  }
});
