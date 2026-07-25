class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function checkPalindrome(leftHalf, length) {
            let rightHalf = length
                ? leftHalf.split("").reverse().join("")
                : leftHalf.slice(0, -1).split("").reverse().join("");
            return leftHalf + rightHalf;
        }

        const newString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

        let len = newString.length;

        let firstHalf = newString.slice(0, Math.ceil(len / 2));
        let mirroredPalindrome = checkPalindrome(firstHalf, len % 2 === 0);
        console.log(mirroredPalindrome, "mirroredPalindrome")
        console.log(newString, "newString")
        if(mirroredPalindrome === newString) return true;

        return false;
    }
}
