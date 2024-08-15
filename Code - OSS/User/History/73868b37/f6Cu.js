async function fetchCryptoDetail(id) {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=true&sparkline=true`);
    const data = await response.json();
    return data;
}

function displayCryptoDetail(crypto) {
    const cryptoDetail = document.getElementById('crypto-detail');
    document.getElementById('crypto-name').textContent = crypto.name;

    cryptoDetail.innerHTML = `
        <img src="${crypto.image.large}" alt="${crypto.name} logo">
        <p>Current Price: $${crypto.market_data.current_price.usd}</p>
        <p>Market Cap: $${crypto.market_data.market_cap.usd.toLocaleString()}</p>
        <p>24h Volume: $${crypto.market_data.total_volume.usd.toLocaleString()}</p>
        <p>Circulating Supply: ${crypto.market_data.circulating_supply.toLocaleString()} ${crypto.symbol.toUpperCase()}</p>
        <p>Max Supply: ${crypto.market_data.max_supply ? crypto.market_data.max_supply.toLocaleString() : 'N/A'}</p>
        <p>All Time High: $${crypto.market_data.ath.usd} on ${new Date(crypto.market_data.ath_date.usd).toLocaleDateString()}</p>
        <p>All Time Low: $${crypto.market_data.atl.usd} on ${new Date(crypto.market_data.atl_date.usd).toLocaleDateString()}</p>
        <h3>Description</h3>
        <p>${crypto.description.en}</p>
    `;

    // Render price chart
    const ctx = document.getElementById('price-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: crypto.market_data.sparkline_7d.price.map((_, index) => index),
            datasets: [{
                data: crypto.market_data.sparkline_7d.price,
                borderColor: '#00ff00',
                borderWidth: 1,
                pointRadius: 0,
                fill: false,
            }]
        },
        options: {
            scales: {
                x: {
                    display: true
                },
                y: {
                    display: true
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
                    enabled: true
                }
            }
        }
    });
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

async function loadCryptoDetail() {
    const cryptoId = getQueryParam('id');
    if (cryptoId) {
        const cryptoDetail = await fetch
