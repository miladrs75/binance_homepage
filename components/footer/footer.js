import { toggleBitcoinInfo } from "./bitcoinInfo.js";
import { handleFaqAccordionToggle } from "./faq.js";

const btcContent = document.querySelector(".content");
const toggleBtn = document.querySelector(".toggle-btn");
const blurLayer = document.querySelector(".blur-layer");
const questions = document.querySelectorAll(".faq-header");

toggleBitcoinInfo(toggleBtn, btcContent, blurLayer);

handleFaqAccordionToggle(questions);
