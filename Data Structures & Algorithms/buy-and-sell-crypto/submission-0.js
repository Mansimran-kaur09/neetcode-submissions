class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let cheapestPrice = prices[0]
        for (let i = 1; i < prices.length; i++) {
            if(prices[i] < cheapestPrice) cheapestPrice = prices[i];
            else maxProfit = Math.max(maxProfit, prices[i] - cheapestPrice)
        }
        return maxProfit
    }
}
