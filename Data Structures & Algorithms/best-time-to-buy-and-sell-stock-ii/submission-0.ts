class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let totalProfit: number = 0;
        let len: number = prices.length;
        let minPrice = prices[0];

        for(let i=1; i<len; i++) {
            let current: number = prices[i];
            let profit: number;
            if(current < minPrice) minPrice = current;
            else {
                profit = current - minPrice
                totalProfit += profit
                minPrice = current
            }
             
        }

        return totalProfit;
    }
}
