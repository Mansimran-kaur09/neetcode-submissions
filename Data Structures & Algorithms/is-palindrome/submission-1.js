class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const newString = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        console.log(newString, "newString");

        let left = 0;
        let right = newString.length - 1;

        while (left < right) {
            if(newString[left] !== newString[right]) {
                console.log(newString[left], "newString[left]");
                console.log(newString[right], "newString[right]");
                console.log(left, "left");
                console.log(right, "right");
                return false;
            }
            left++;
            right--;
        }
        return true
    }
}
