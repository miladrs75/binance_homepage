export function handleMobileMenuToggle(menubtn, closebtn, mobileHeaderMenu) {
  menubtn.addEventListener("click", () => {
    mobileHeaderMenu.classList.add("active");
  });

  closebtn.addEventListener("click", () => {
    mobileHeaderMenu.classList.remove("active");
  });
}
