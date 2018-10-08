module.exports = function makeExchange(currency) {
   
    // First call with coinsback = {} and currentCoinIndex = 0.
    let magic = function(currency, coinsback, coins, coinLabels, currentCoinIndex) {
        if (currency > 10000){
            return coinsback = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        }
        if (currency <= 0){
            return coinsback;
        }
        let currentCoin = coins[currentCoinIndex];
        let currentCoinCount = Math.floor(currency / currentCoin);
        if (currentCoinCount != 0) {
            coinsback[coinLabels.charAt(currentCoinIndex)] = currentCoinCount;
        }
        return magic(currency % currentCoin, coinsback, coins, coinLabels, currentCoinIndex + 1);
    };
    return magic(currency, {}, [50, 25, 10, 5, 1], "HQDNP", 0);
}

