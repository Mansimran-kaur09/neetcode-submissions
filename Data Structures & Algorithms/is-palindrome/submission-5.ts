class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const str: string = s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase();
        const n: number = str.length;
        console.log(str, "str")

        let start: number = 0;
        let end: number = n-1;

        while(start <= end) {
            if(start === end) return true;

            if(str[start] !== str[end]) return false;

            start++;
            end--;
        }
        

        return true;
    }
}
