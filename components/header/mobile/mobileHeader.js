import { menuData } from "../headerMenuData.js";
import { renderMenu } from "./renderMenu.js";
import { handleAccordion } from "./accordion.js";
import { handleMobileMenuToggle } from "./mobileMenuToggle.js";

const mobileHeaderMenu = document.querySelector(".header--mobile__menu");
const mobileHeaderMenuAcrdn = document.querySelector(".header--mobile__menu-accordion");
const menubtn = document.querySelector(".menu-btn");
const closebtn = document.querySelector(".close-btn");

renderMenu(menuData, mobileHeaderMenuAcrdn);
handleAccordion(mobileHeaderMenuAcrdn);
handleMobileMenuToggle(menubtn, closebtn, mobileHeaderMenu);
