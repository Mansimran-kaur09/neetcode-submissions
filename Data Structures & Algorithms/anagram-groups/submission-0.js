class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strCount = new Map();
        for(const str of strs) {
            const sortedStr = [...str].sort().join('')
            if(strCount.has(sortedStr)) {
                const values = strCount.get(sortedStr)
                values.push(str)
            } else strCount.set(sortedStr,[str])
            
        }

        return [...strCount.values()]
    }
}
