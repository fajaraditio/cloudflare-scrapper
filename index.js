const cloudflareScraper = require('cloudflare-scraper');

(async() => {
    try {
        const response = await cloudflareScraper.get('https://etherscan.io/address/0xDF71BA122E3d1484864FE72D3fE4533DCa12335e');
        console.log(response);
    } catch (error) {
        console.log(error);
    }
})();