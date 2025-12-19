function createCoinHTML(coin, mode) {
  if (mode === "popular") {
    return `
      <a href="#" class="popular-coins--item">
        <div class="coins-symbol">
          <img src="${coin.iconUrl}" alt="${
      coin.name
    }" width="16" height="16" />
          <span class="coin-symbol">${coin.symbol}</span>
          <span class="coin-name">${coin.name}</span>
        </div>
        <span class="coin-price">$${Number(coin.price).toFixed(2)}</span>
        <span class="coin-changes">${coin.change}%</span>
      </a>
    `;
  }

  if (mode === "live") {
    return `
      <div class="coin-row">
        <div class="coin-row--left">
          <div class="coins-symbol">
            <img src="${coin.iconUrl}" alt="${
      coin.name
    }" width="16" height="16" />
            <span class="coin-symbol">${coin.symbol}</span>
            <span class="coin-name">${coin.name}</span>
          </div>
          <span class="coin-price">$${Number(coin.price).toFixed(2)}</span>
        </div>
        <div class="coin-row--right">
          <span class="coin-views">28M</span>
          <span class="coin-changes">${coin.change}%</span>
        </div>
      </div>
      <span class="coin-trade"><a href="#" class="trade-link">Trade</a></span>
    `;
  }

  if (mode === "topGainers") {
    return `
      <a href="a" class="coin-row">
        <div class="coin-row--left">
          <div class="coins-symbol">
            <img src="${coin.iconUrl}" alt="${
      coin.name
    }" width="16" height="16" />
            <span class="coin-symbol">${coin.symbol}</span>
            <span class="coin-name">${coin.name}</span>
          </div>
          <span class="coin-price">$${Number(coin.price).toFixed(2)}</span>
        </div>
        <div class="coin-row--right">
          <span class="coin-views">28M</span>
          <span class="coin-changes">${coin.change}%</span>
        </div>
      </a>
    `;
  }
}

export async function fetchCrypto(ulId, startIndex, count, mode) {
  ulId.innerHTML = `<li style="color:#999">Loading...</li>`;

  try {
    const res = await fetch("https://api.coinranking.com/v2/coins");
    const data = await res.json();

    ulId.innerHTML = "";

    for (let i = startIndex; i < startIndex + count; i++) {
      const coin = data.data.coins[i];
      const li = document.createElement("li");

      if (mode === "live") {
        li.className = "live-crypto--item";
      }

      li.innerHTML = createCoinHTML(coin, mode);
      ulId.appendChild(li);

      const changeEls = li.querySelectorAll(".coin-changes");
      changeEls.forEach((el) => {
        const num = Number(el.innerText.replace("%", ""));
        el.style.color = num > 0 ? "#16bb8e" : "#f44465";
      });
    }
  } catch (err) {
    ulId.innerHTML = `<li style="color:#f44465">Error loading data</li>`;
    console.error("Error fetching data:", err);
  }
}
