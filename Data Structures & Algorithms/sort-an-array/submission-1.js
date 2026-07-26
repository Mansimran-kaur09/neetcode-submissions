class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findMin(arr, index) {
        let min = index;
        for (let i = index; i < arr.length; i++) {
            if (arr[min] > arr[i]) min = i;
        }
        return min;
    }

    sortArray(nums) {
        let index = 0;

        while (index < nums.length) {
            const minIndex = this.findMin(nums, index);

            // Swapping
            let temp = nums[minIndex];
            nums[minIndex] = nums[index];
            nums[index] = temp;

            index++;
        }
        return nums;
    }
}
