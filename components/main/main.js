import { activeTabs } from "./activePopularCoinsTabs.js";
import {fetchCryptoData} from "./fetchCryptoData.js"

const popularCoins = document.querySelectorAll(".popular-coins");
const hotFutures = document.querySelector("#hot-futures--list > ul");
const newlyAdded = document.querySelector("#newly-added--list > ul");

activeTabs(popularCoins);

fetchCryptoData(hotFutures, 0);
fetchCryptoData(newlyAdded, 5);
