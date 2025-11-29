import { menuData } from "../headerMenuData.js";
import { renderMenu } from "./renderMenu.js";

const desktopHeaderMenu = document.querySelector(".header--desktop__menu");

renderMenu(menuData, desktopHeaderMenu);
