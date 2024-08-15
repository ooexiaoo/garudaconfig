async function fetchPrices() {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true');
    const data = await response.json();
    return data;
}

async function fetchGlobalData() {
    const response = await fetch('https://api.coingecko.com/api/v3/global');
    const data = await response.json();
    return data;
}

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
            <canvas id="sparkline-${crypto.id}" width="100" height="50"></canvas>
        `;
        priceList.appendChild(priceItem);

        // Render sparkline
        const ctx = document.getElementById(`sparkline-${crypto.id}`).getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: crypto.sparkline_in_7d.price.map((_, index) => index),
                datasets: [{
                    data: crypto.sparkline_in_7d.price,
                    borderColor: '#00ff00',
                    borderWidth: 1,
                    pointRadius: 0,
                    fill: false,
                }]
            },
            options: {
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        display: false
                    }
                },
                elements: {
                    line: {
                        tension: 0.3
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            }
        });
    });
}

function displayGlobalData(data) {
    const globalDataElement = document.getElementById('global-data');
    globalDataElement.innerHTML = `
        <p>Total Market Cap: $${data.data.total_market_cap.usd.toLocaleString()}</p>
        <p>Total 24h Volume: $${data.data.total_volume.usd.toLocaleString()}</p>
        <p>BTC Dominance: ${data.data.market_cap_percentage.btc.toFixed(2)}%</p>
    `;
}

async function updateData() {
    const prices = await fetchPrices();
    displayPrices(prices);

    const globalData = await fetchGlobalData();
    displayGlobalData(globalData);
}

// Update prices and global data on page load
updateData();

// Update prices and global data every minute
setInterval(updateData, 60000);
