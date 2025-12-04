export function fetchCryptoData(ulId, n) {
  fetch("https://api.coinranking.com/v2/coins")
    .then((res) => res.json())
    .then((res) => {
      for (let i = n; i < n + 5; i++) {
        const coinItem = document.createElement("li");
        coinItem.className = "popular-coins--item";
        coinItem.innerHTML = `<div class="coins-symbol">
                              <img src="${res.data.coins[i].iconUrl}" width= 16 height= 16 />
                              <span class="coin-symbol">${res.data.coins[i].symbol}</span>
                              <span class="coin-name">${res.data.coins[i].name}</span>
                            </div>
                            <div>
                              $${Number(res.data.coins[i].price).toFixed(2)}
                            </div>`;

        ulId.appendChild(coinItem);
      }
    });
}
