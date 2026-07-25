class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0,
            right = heights.length - 1;
        let maxArea = 0;

        while (left < right) {
            const minHeight = Math.min(heights[left], heights[right]);
            const currentArea = minHeight * (right-left);

            maxArea = Math.max(maxArea, currentArea);

            if(heights[left] < heights[right]) left++
            else right--
        }
        return maxArea;
    }
}
