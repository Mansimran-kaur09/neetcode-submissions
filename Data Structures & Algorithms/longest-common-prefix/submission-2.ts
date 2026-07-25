class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    findCommon(word1, word2) {
        let index: number = 0;
        let len: number = Math.min(word1.length, word2.length);
        let max: string = "";

        while (index < len) {
            if (word1[index] === word2[index]) {
                max += word1[index];
                index++;
            } else break;
        }
        return max;
    }

    longestCommonPrefix(strs: string[]): string {
        let longest: string = strs[0];

        for (let i = 1; i < strs.length; i++) {
            let first: string = strs[i - 1];
            let second: string = strs[i];

            let localMax: string = this.findCommon(first, second);

            if (localMax.length < longest.length) longest = localMax;
        }

        return longest;
    }
}
