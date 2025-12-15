export function toggleBitcoinInfo(btcContentToggleBtn,btcContent,blurLayer) {
  btcContentToggleBtn.addEventListener("click", () => {
    btcContent.classList.toggle("active");

    if (btcContent.classList.contains("active")) {
      btcContentToggleBtn.innerText = "Show Less";
      blurLayer.classList.add("active");
    } else {
      btcContentToggleBtn.innerText = "Show More";
      blurLayer.classList.remove("active");
    }
  });
}
