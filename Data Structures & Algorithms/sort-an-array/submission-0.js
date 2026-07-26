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
        const arr = [...nums];

        while (index < arr.length) {
            const minIndex = this.findMin(arr, index);

            // Swapping
            let temp = arr[minIndex];
            arr[minIndex] = arr[index];
            arr[index] = temp;

            index++;
        }
        return arr;
    }
}
