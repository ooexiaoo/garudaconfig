async function fetchPrices() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple&vs_currencies=usd');
    const data = await response.json();
    return data;
}

function displayPrices(prices) {
    const priceList = document.getElementById('price-list');
    priceList.innerHTML = ''; // Clear previous content

    for (const [crypto, priceInfo] of Object.entries(prices)) {
        const priceItem = document.createElement('div');
        priceItem.classList.add('price-item');
        priceItem.innerHTML = `${crypto.charAt(0).toUpperCase() + crypto.slice(1)}: $${priceInfo.usd}`;
        priceList.appendChild(priceItem);
    }
}

async function updatePrices() {
    const prices = await fetchPrices();
    displayPrices(prices);
}

// Update prices on page load
updatePrices();

// Optionally, update prices every minute
setInterval(updatePrices, 60000);
