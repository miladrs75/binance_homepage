import { toggleBitcoinInfo } from "./bitcoinInfo.js";
import { handleFaqAccordionToggle } from "./faq.js";
import { handleNavItemToggle } from "./toggleNavItem.js";

const btcContent = document.querySelector(".content");
const btcContentToggleBtn = document.querySelector(".toggle-btn");
const blurLayer = document.querySelector(".blur-layer");
const questions = document.querySelectorAll(".faq-header");
const footerNavToggleItem = document.querySelectorAll(".nav-column > div");

toggleBitcoinInfo(btcContentToggleBtn, btcContent, blurLayer);

handleFaqAccordionToggle(questions);

handleNavItemToggle(footerNavToggleItem)