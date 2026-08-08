class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        function checkPalindrome(leftHalf, evenLength) {
            let rightHalf: string = evenLength
                ? leftHalf.split('').reverse().join('')
                : leftHalf.slice(0, -1).split('').reverse().join('');

            return leftHalf + rightHalf;
        }

        const newStr: string = s.replace(/[^a-z0-9]/gi, "").toLocaleLowerCase();
        const len: number = newStr.length;

        let leftHalf: string = newStr.slice(0, Math.ceil(len / 2));
        let mirrored: string = checkPalindrome(leftHalf, len % 2 === 0);

        // console.log(leftHalf, "leftHalf")
        console.log(mirrored, "mirrored")
        console.log(newStr, "newStr")

        if(mirrored === newStr) return true;
        return false;
    }
}
