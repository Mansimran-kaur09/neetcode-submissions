class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    heapify(arr, n, i) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            this.heapify(arr, n, largest);
        }
    }

    sortArray(nums) {
        const n = nums.length;

        // Build Max Heap
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            this.heapify(nums, n, i);
        }

        // Extract elements one by one
        for (let i = n - 1; i > 0; i--) {
            [nums[0], nums[i]] = [nums[i], nums[0]];
            this.heapify(nums, i, 0);
        }
        return nums;
    }
}
