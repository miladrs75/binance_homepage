export function toggleBitcoinInfo(toggleBtn,btcContent,blurLayer) {
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
}
