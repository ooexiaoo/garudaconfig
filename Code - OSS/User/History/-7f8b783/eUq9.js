// Fetching current prices
async function fetchPrices() {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    const data = await response.json();
    return data;
}

// Fetching global market data
async function fetchGlobalData() {
    const response = await fetch('https://api.coingecko.com/api/v3/global');
    const data = await response.json();
    return data;
}

// Displaying prices
function displayPrices(prices) {
    const priceList = document.getElementById('price-list');
    priceList.innerHTML = ''; // Clear previous content

    prices.forEach(crypto => {
        const priceItem = document.createElement('div');
        priceItem.classList.add('price-item');
        const price = crypto.current_price < 0.01 ? crypto.current_price.toFixed(4) : crypto.current_price.toFixed(2);
        priceItem.innerHTML = `
            <img src="${crypto.image}" alt="${crypto.name} logo">
            <span>${crypto.name}: $${price}</span>
        `;
        priceList.appendChild(priceItem);
    });
}

// Displaying global market data
function displayGlobalData(data) {
    const globalDataElement = document.getElementById('global-data');
    globalDataElement.innerHTML = `
        <p>Total Market Cap: $${data.total_market_cap.usd.toLocaleString()}</p>
        <p>Total 24h Volume: $${data.total_volume.usd.toLocaleString()}</p>
        <p>BTC Dominance: ${data.market_cap_percentage.btc.toFixed(2)}%</p>
    `;
}

// Updating prices and global data on page load
async function updateData() {
    const prices = await fetchPrices();
    displayPrices(prices);

    const globalData = await fetchGlobalData();
    displayGlobalData(globalData);
}

// Update prices and global data every minute
updateData();
setInterval(updateData, 60000);
