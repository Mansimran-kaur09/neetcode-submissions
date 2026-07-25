class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mapStr = new Map();
        for (const str of strs) {
            const sortedStr = str
                .split("")
                .sort()
                .join("");

            if (mapStr.has(sortedStr)) {
                const values = mapStr.get(sortedStr);
                values.push(str);
            } else {
                mapStr.set(sortedStr, [str]);
            }
        }

        return [...mapStr.values()];
    }
}
