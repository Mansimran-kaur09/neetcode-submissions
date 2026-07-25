class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function checkPalindrome(leftHalf, evenLength) {
            let rightHalf = evenLength
                ? leftHalf.split('').reverse().join('')
                : leftHalf.slice(0, -1).split('').reverse().join('')
            return leftHalf + rightHalf
        }

        let newStr = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
        let len = newStr.length;

        let leftHalf = newStr.slice(0, Math.ceil(len / 2));
        let mirrored = checkPalindrome(leftHalf, len % 2 === 0);

        if(mirrored === newStr) return true;

        return false
    }
}
