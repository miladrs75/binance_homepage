export function handleAccordion(mobileHeaderMenuAcrdn) {
  mobileHeaderMenuAcrdn.addEventListener("click", (e) => {
    const item = e.target.closest(".header--mobile__menu-accordion-item");
    const submenu = item.querySelector(".header--mobile__submenu");
    submenu.classList.toggle("active");
  });
}
