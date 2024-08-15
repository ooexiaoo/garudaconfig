async function fetchCryptoDetail(id) {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`);
    const data = await response.json();
    return data;
}

function displayCryptoDetail(crypto) {
    const cryptoDetail = document.getElementById('crypto-detail');
    document.getElementById('crypto-name').textContent = crypto.name;

    cryptoDetail.innerHTML = `
        <img src="${crypto.image.large}" alt="${crypto.name} logo">
        <p>Symbol: ${crypto.symbol.toUpperCase()}</p>
        <p>Current Price: $${crypto.market_data.current_price.usd}</p>
        <p>Market Cap: $${crypto.market_data.market_cap.usd.toLocaleString()}</p>
        <p>24h Volume: $${crypto.market_data.total_volume.usd.toLocaleString()}</p>
        <p>Circulating Supply: ${crypto.market_data.circulating_supply.toLocaleString()} ${crypto.symbol.toUpperCase()}</p>
        <p>Max Supply: ${crypto.market_data.max_supply ? crypto.market_data.max_supply.toLocaleString() : 'N/A'}</p>
        <p>All Time High: $${crypto.market_data.ath.usd} on ${new Date(crypto.market_data.ath_date.usd).toLocaleDateString()}</p>
        <p>All Time Low: $${crypto.market_data.atl.usd} on ${new Date(crypto.market_data.atl_date.usd).toLocaleDateString()}</p>
        <h3>Description</h3>
        <p>${crypto.description.en || 'No description available.'}</p>
        <h3>Community Data</h3>
        <p>Facebook Likes: ${crypto.community_data.facebook_likes || 'N/A'}</p>
        <p>Twitter Followers: ${crypto.community_data.twitter_followers.toLocaleString() || 'N/A'}</p>
        <p>Reddit Subscribers: ${crypto.community_data.reddit_subscribers.toLocaleString() || 'N/A'}</p>
        <p>Reddit Average Posts (48h): ${crypto.community_data.reddit_average_posts_48h || 'N/A'}</p>
        <p>Reddit Average Comments (48h): ${crypto.community_data.reddit_average_comments_48h || 'N/A'}</p>
        <h3>Developer Data</h3>
        <p>Forks: ${crypto.developer_data.forks || 'N/A'}</p>
        <p>Stars: ${crypto.developer_data.stars || 'N/A'}</p>
        <p>Subscribers: ${crypto.developer_data.subscribers || 'N/A'}</p>
        <p>Total Issues: ${crypto.developer_data.total_issues || 'N/A'}</p>
        <p>Closed Issues: ${crypto.developer_data.closed_issues || 'N/A'}</p>
        <p>Pull Requests Merged: ${crypto.developer_data.pull_requests_merged || 'N/A'}</p>
        <p>Pull Request Contributors: ${crypto.developer_data.pull_request_contributors || 'N/A'}</p>
        <h3>Market Data (Last 7 Days)</h3>
    `;

    // Render price chart
    const ctx = document.getElementById('price-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: crypto.market_data.sparkline_7d.price.map((_, index) => index),
            datasets: [{
                data: crypto.market_data.sparkline_7d.price,
                borderColor: 'yellow',
                borderWidth: 1,
                pointRadius: 2,
                fill: true,
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
        const cryptoDetail = await fetchCryptoDetail(cryptoId);
        displayCryptoDetail(cryptoDetail);
    } else {
        document.getElementById('crypto-detail').textContent = 'No cryptocurrency selected';
    }
}

// Load cryptocurrency detail on page load
loadCryptoDetail();
