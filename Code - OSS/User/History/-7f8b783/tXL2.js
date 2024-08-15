async function fetchPrices() {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    const data = await response.json();
    return data;
}

function displayPrices(prices) {
    const priceList = document.getElementById('price-list');
    priceList.innerHTML = ''; // Clear previous content

    prices.forEach(crypto => {
        const priceItem = document.createElement('div');
        priceItem.classList.add('price-item');
        const price = crypto.current_price < 0.01 ? crypto.current_price.toFixed(8) : crypto.current_price.toFixed(2);
        priceItem.innerHTML = `
            <img src="${crypto.image}" alt="${crypto.name} logo">
            <span>${crypto.name}: $${price}</span>
        `;
        priceList.appendChild(priceItem);
    });
}

async function updatePrices() {
    const prices = await fetchPrices();
    displayPrices(prices);
}

// Update prices on page load
updatePrices();

// Optionally, update prices every minute
setInterval(updatePrices, 10000);
