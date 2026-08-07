class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let nextBuy = 0,
            nextSell = 0;
        let curBuy = 0,
            curSell = 0;

        for(let i = prices.length-1; i>=0; i--) {
            curBuy = Math.max(nextBuy, nextSell - prices[i]);
            curSell = Math.max(nextSell, nextBuy + prices[i]);

            nextBuy = curBuy;
            nextSell = curSell;
        }
        return curBuy;
    }
}
