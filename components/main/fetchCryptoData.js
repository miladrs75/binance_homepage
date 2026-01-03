let coinCache = [];

function baseCoinRow(coin, price, extraRight = "") {
  return `
    <div class="coin-row--left">
      <div class="coins-symbol">
        <img src="${coin.iconUrl}" alt="${coin.name}" width="16" height="16" />
        <span class="coin-symbol">${coin.symbol}</span>
        <span class="coin-name">${coin.name}</span>
      </div>
      <span class="coin-price">$${price.toFixed(2)}</span>
    </div>
    <div class="coin-row--right">
      ${extraRight}
      <span class="coin-changes">${coin.change}%</span>
    </div>
  `;
}

function createCoinHTML(coin, mode) {
  const price = Number(coin.price) || 0;

  if (mode === "popular") {
    return `
      <a href="#" class="popular-coins--item">
        ${baseCoinRow(coin, price)}
      </a>
    `;
  }

  if (mode === "live") {
    return `
      <div class="coin-row">
        ${baseCoinRow(coin, price, `<span class="coin-views">28M</span>`)}
      </div>
      <span class="coin-trade"><a href="#" class="trade-link">Trade</a></span>
    `;
  }

  if (mode === "topGainers") {
    return `
      <a href="#" class="coin-row">
        ${baseCoinRow(coin, price, `<span class="coin-views">28M</span>`)}
      </a>
    `;
  }
}

function getChangeClass(value) {
  return value > 0 ? "positive" : "negative";
}

export function fetchCrypto(ulId, startIndex, count, mode) {
  ulId.innerHTML = "";

  const fragment = document.createDocumentFragment();
  const coins = coinCache.slice(startIndex, startIndex + count);

  coins.forEach((coin) => {
    const li = document.createElement("li");
    if (mode === "live") li.className = "live-crypto--item";

    li.innerHTML = createCoinHTML(coin, mode);

    li.querySelectorAll(".coin-changes").forEach((el) => {
      const num = Number(el.innerText.replace("%", "")) || 0;
      el.classList.add(getChangeClass(num));
    });

    fragment.appendChild(li);
  });

  ulId.appendChild(fragment);
}

export async function loadCoins() {
  try {
    const res = await fetch("https://api.coinranking.com/v2/coins");
    const data = await res.json();
    coinCache = data.data.coins;
  } catch (err) {
    console.error("API Error:", err);
  }
}
