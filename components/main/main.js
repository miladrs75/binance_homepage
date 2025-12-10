import { activeTabs } from "./activePopularCoinsTabs.js";
import { fetchCrypto } from "./fetchCryptoData.js";
import { renderSlideImages } from "./carousel.js";
import { updateCarouselIndicators } from "./carousel.js";

const popularCoins = document.querySelectorAll(".popular-coins");
const hotFutures = document.querySelector("#hot-futures--list > ul");
const newlyAdded = document.querySelector("#newly-added--list > ul");
const topVolum = document.querySelector("#top-volume--list > ul");
const hotTokes = document.querySelector("#hot-tokes--list > ul");
const topLosers = document.querySelector("#top-losers--list > ul");
const topGainers = document.querySelector("#top-gainers--list > ul");
const topLosersDesktop = document.querySelector(
  "#top-losers--list--desktop > ul"
);
const topGainersDesktop = document.querySelector(
  "#top-gainers--list--desktop > ul"
);
const slideImages = document.querySelectorAll(".carousel-slide--image");
const carousel = document.querySelector(".advanced-tools--carousel");
const indicators = document.querySelectorAll(".indicator");

activeTabs(popularCoins);
fetchCrypto(hotFutures, 0, 5, "popular");
// setInterval(() => fetchCrypto(hotFutures, 0, 5), 30000);
fetchCrypto(newlyAdded, 5, 5, "popular");
// setInterval(() => fetchCrypto(newlyAdded, 5, 5), 30000);
fetchCrypto(topVolum, 0, 11, "live");
// setInterval(() => fetchCrypto(topVolum, 0, 8), 30000);
fetchCrypto(hotTokes, 11, 11, "live");
// setInterval(() => fetchCrypto(hotTokes, 8, 8), 30000);
fetchCrypto(topLosers, 0, 3, "topGainers");
fetchCrypto(topGainers, 42, 3, "topGainers");
fetchCrypto(topLosersDesktop, 0, 3, "topGainers");
fetchCrypto(topGainersDesktop, 42, 3, "topGainers");

renderSlideImages(slideImages);
updateCarouselIndicators(carousel, indicators);
