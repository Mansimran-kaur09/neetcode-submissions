class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        function partition(low, high) {
            const pivot = nums[high];
            let i = low - 1;

            for (let j = low; j < high; j++) {
                if (nums[j] < pivot) {
                    i++;
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                }
            }
            [nums[i + 1], nums[high]] = [nums[high], nums[i + 1]];
            return i + 1;
        }

        function quickSort(low, high) {
            if (low < high) {
                const pivotIndex = partition(low, high);

                quickSort(low, pivotIndex - 1);
                quickSort(pivotIndex + 1, high);
            }
        }
        quickSort(0, nums.length - 1);
        return nums;
    }
}
