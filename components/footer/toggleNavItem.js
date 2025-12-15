export function handleNavItemToggle(footerNavToggleItem) {
  footerNavToggleItem.forEach((f) => {
    f.addEventListener("click", () => {
      const target = f.nextElementSibling;
      target.classList.toggle("active");
    });
  });
}
