export function renderMenu(menuData, mobileHeaderMenuAcrdn) {
  menuData.forEach((item) => {
    const menuItem = document.createElement("li");
    menuItem.className = "header--mobile__menu-accordion-item";
    menuItem.innerHTML = `
      <span>${item.title}</span>
      <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.65002 0.649994L3.65837 3.64999L0.650025 0.649995" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round"/>
      </svg>`;

    const subMenu = document.createElement("ul");
    subMenu.className = "header--mobile__submenu";

    item.subtitle.forEach((sub) => {
        const subItem = document.createElement("li");
        subItem.className = "header--mobile__submenu-item";
        subItem.innerHTML = `
        <a href="#">
          ${sub.info}
        </a>`;
        subMenu.appendChild(subItem);
      });

    menuItem.appendChild(subMenu);
    mobileHeaderMenuAcrdn.appendChild(menuItem);
  });
}
